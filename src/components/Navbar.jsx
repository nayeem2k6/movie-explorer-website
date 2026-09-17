import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">
          🎬 MovieExplorer
        </Link>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </div>

        <Link to="/movies" className="nav-button">
          Explore Movies
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;