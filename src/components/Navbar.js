import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active" aria-current="page"
                  to="/"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  {" "}
                  {props.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-active"
                  to="/About"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  {props.about}{" "}
                </Link>
              </li>
            </ul>
            <div
              className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"
                }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.changeMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Switch to dark mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  home: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set Title",
  about: "Set About",
  home: "Set Home",
};
