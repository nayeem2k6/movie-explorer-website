const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  const image =
    movie.image?.original ||
    movie.image?.medium ||
    "https://via.placeholder.com/800x450?text=No+Image";

  const year = movie.premiered
    ? new Date(movie.premiered).getFullYear()
    : "N/A";

  const rating = movie.rating?.average || "N/A";

  const summary = movie.summary
    ? movie.summary.replace(/<[^>]*>/g, "")
    : "No description available.";

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
    >
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <img
          src={image}
          alt={movie.name}
          className="modal-image"
        />

        <div className="modal-content">
          <h2>{movie.name}</h2>

          <div className="modal-meta">
            <span>⭐ {rating}</span>
            <span>📅 {year}</span>
            <span>
              🎭 {movie.genres?.join(", ") || "N/A"}
            </span>
          </div>

          <h3>Overview</h3>

          <p>{summary}</p>

          {movie.network?.name && (
            <p>
              <strong>Network:</strong>{" "}
              {movie.network.name}
            </p>
          )}

          {movie.language && (
            <p>
              <strong>Language:</strong>{" "}
              {movie.language}
            </p>
          )}

          <button
            className="close-button"
            onClick={onClose}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;