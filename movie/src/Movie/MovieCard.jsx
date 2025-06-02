

import React, { useState, useEffect } from 'react';
import './MovieCard.css'
import axios from 'axios';
import MovieWrapper from '../Movie/MovieWrapper';

export default function MovieCard() {
  const [movieData, setMovieData] = useState([]);
  const [movie, setMovie] = useState('');
  const [isStatus, setIsStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeStatusIdx, setActiveStatusIdx] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setMovieData([]);
    setIsStatus(null);

    axios.get(`https://omdbapi.com/?s=batman&page=1&apikey=eef0b2e9`)
      .then((res) => {
        if (res.data.Response === 'True') {
          setMovieData(res.data.Search);
          setIsStatus(true);
        } else {
          setMovieData([]);
          setIsStatus(false);
        }
        setIsLoading(false);
      });
  }, []);

  
  const addBtn = () => {
    if (movie.trim() === '') return;

    setIsLoading(true);
    setMovieData([]);
    setIsStatus(null);

    axios.get(`https://omdbapi.com/?s=${movie}&page=1&apikey=eef0b2e9`)
      .then((res) => {
        if (res.data.Response === 'True') {
          setMovieData(res.data.Search);
          setIsStatus(true);
        } else {
          setMovieData([]);
          setIsStatus(false);
        }
        setIsLoading(false);
      });
  };

  const addMovie = (e) => {
    setMovie(e.target.value);
  };

  return (
    <div id='movieWrapper'>
      <h1>Movie-Cards</h1>
      <input
        placeholder='search your movies here...'
        type='text'
        id='movieInp'
        onChange={addMovie}
        value={movie}
      />

      <button onClick={addBtn}>SEARCH</button>

      {isLoading && <h2 style={{ textAlign: "center" }}>Loading....</h2>}
      {isStatus === false && (
        <h2 style={{ textAlign: "center" }}>404 MOVIE NOT FOUND...</h2>
      )}

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {
          movieData.map((movie, idx) => {
            return (
              <MovieWrapper
                key={idx}
                Poster={movie.Poster}
                Title={movie.Title}
                Description={movie.Year} 
                idx={idx}
                activeStatusIdx={activeStatusIdx}
                setActiveStatusIdx={setActiveStatusIdx}
              />
            )
          })
        }
      </div>
    </div>
  );
}
