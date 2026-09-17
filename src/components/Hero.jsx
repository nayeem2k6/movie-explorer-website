import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="container hero-content">
          <span className="hero-badge">🎬 MOVIE EXPLORER</span>

          <h1>
            Discover Your
            <span> Favorite Shows</span>
          </h1>

          <p>
            Explore thousands of amazing shows, discover new stories,
            and find your next favorite entertainment.
          </p>

          <Link to="/movies" className="hero-button">
            Explore Now →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;