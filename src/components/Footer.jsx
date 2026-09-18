import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h3>🎬 MovieExplorer</h3>

        <p>
          Discover amazing shows and find your next favorite story.
        </p>

        <p className="copyright">
          © 2026 MovieExplorer. All rights reserved.
        </p>

        <div className="footer-links">
          {/* GitHub */}
          <a
            href="https://github.com/nayeem2k6"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nayeem2k6/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/19HXSZQav5/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;