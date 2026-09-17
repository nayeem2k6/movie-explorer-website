import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />

      <section className="home-info">
        <div className="container">
          <div className="section-heading">
            <span>EXPLORE</span>
            <h2>Everything You Want to Watch</h2>
            <p>
              Search and discover popular shows from the TVMaze
              database.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🔎</div>
              <h3>Search Easily</h3>
              <p>
                Find your favorite shows quickly using our search
                functionalityS
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎬</div>
              <h3>Explore Shows</h3>
              <p>
                Browse through a large collection of shows and
                discover something new.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>See Details</h3>
              <p>
                View ratings, genres, release dates and detailed
                information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;