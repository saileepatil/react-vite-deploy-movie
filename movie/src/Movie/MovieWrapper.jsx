

export default function MovieWrapper({
  Poster,
  Title,
  Description,
  idx,
  activeStatusIdx,
  setActiveStatusIdx,
}) {
  const handleClick = () => {
    setActiveStatusIdx(idx);
  };

  return (
    <div className="col">
      <div
        className={`movie-card ${activeStatusIdx === idx ? 'active-card' : ''}`}
        onClick={handleClick}
      >
        <img
          className="movie-poster"
          src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/350x500?text=No+Image'}
          // src={Poster}

          alt={Title}
        />
        <div className="movie-details">
          <div className="movie-title">{Title}</div>
          <div className="movie-description">Year: {Description}</div>
        </div>
      </div>
    </div>
  );
}

