import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar">
          <div className="navbar-brand">
          <h2 className="navbar-item Nav-icon is-size-4">
            Joshua
          </h2>
            <a
              role="button"
              className={`navbar-burger ${isActive ? "is-active" : ""}`}
              aria-label="menu"
              aria-expanded="false"
              onClick={toggleNavbar}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <ul className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <li className="navbar-start">
              <Link to="/" className="navbar-item">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/5year" className="navbar-item">
                5 Year Plan
              </Link>
            </li>
            <li className="navbar-end">
              <Link to="/hobbies" className="navbar-item">
                Hobbies
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
