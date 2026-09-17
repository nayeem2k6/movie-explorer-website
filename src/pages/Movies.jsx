import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import Loading from "../components/Loading";
import {
  getAllShows,
  
} from "../services/tvmazeApi";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getAllShows();

        setMovies(data);
      } catch (err) {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  useEffect(() => {
    const delaySearch = setTimeout(async () => {
      if (!search.trim()) {
        try {
          setLoading(true);

          const data = await getAllShows();

          setMovies(data);
        } catch (err) {
          setError("Failed to load shows.");
        } finally {
          setLoading(false);
        }

        return;
      }

      try {
        setLoading(true);
        setError("");

        const data = await searchShows(search);

        setMovies(data);
      } catch (err) {
        setError("Search failed. Please try again.");
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(delaySearch);
  }, [search]);

  return (
    <main className="movies-page">
      <div className="container">

        <div className="movies-header">
          <div>
            <span className="page-label">DISCOVER</span>

            <h1>Explore Movies & Shows</h1>

            <p>
              Search for your favorite movies and TV shows.
            </p>
          </div>
        </div>

        <div className="search-wrapper">
          <span className="search-icon">🔍</span>

          <input
            type="text"
            placeholder="Search for a movie or show..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              className="clear-search"
              onClick={() => setSearch("")}
            >
              ✕
            </button>
          )}
        </div>

        {loading && <Loading />}

        {!loading && error && (
          <div className="error-message">
            <p>⚠️ {error}</p>

            <button
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && movies.length === 0 && (
          <div className="no-results">
            <div>🎬</div>

            <h2>No Shows Found</h2>

            <p>
              We couldn't find anything matching "{search}".
            </p>
          </div>
        )}

        {!loading && !error && movies.length > 0 && (
          <>
            <div className="results-info">
              <p>
                {search
                  ? `Search results for "${search}"`
                  : `Showing ${movies.length} shows`}
              </p>
            </div>

            <div className="movie-grid">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onDetails={setSelectedMovie}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </main>
  );
};

export default Movies;