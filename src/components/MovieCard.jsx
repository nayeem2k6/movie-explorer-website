const MovieCard = ({ movie, onDetails }) => {
  const image =
    movie.image?.medium ||
    "https://via.placeholder.com/300x450?text=No+Image";

  const year = movie.premiered
    ? new Date(movie.premiered).getFullYear()
    : "N/A";

  const rating = movie.rating?.average || "N/A";

  return (
    <article className="movie-card">
      <div className="poster-wrapper">
        <img
          src={image}
          alt={movie.name}
          className="movie-poster"
        />

        <div className="rating-badge">
          ⭐ {rating}
        </div>
      </div>

      <div className="movie-info">
        <h3 title={movie.name}>{movie.name}</h3>

        <div className="movie-meta">
          <span>⭐ {rating}</span>
          <span>📅 {year}</span>
        </div>

        <button
          className="details-button"
          onClick={() => onDetails(movie)}
        >
          See Details
        </button>
      </div>
    </article>
  );
};

export default MovieCard;