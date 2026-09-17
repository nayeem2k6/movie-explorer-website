

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="not-found">

      <div>

        <span>404</span>

        <h1>Page Not Found</h1>

        <p>
          Sorry, the page you are looking for
          does not exist.
        </p>

        <Link to="/" className="hero-button">
          ← Back to Home
        </Link>

      </div>

    </section>
  );
};

export default NotFound;
