import React from "react";

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="nav-header">
            <div className="nav-brand text-white font-weight-normal">
              <i className="fas fa-sun" /> &nbsp;WeatherLand
            </div>
          </div>
          <ul className="navbar-nav ml-auto d-inline-block text-light">
            <li className="nav-item d-inline-block mr-4">
                {/* */}
            </li>
            <li className="nav-item d-inline-block mt-2 mr-4">
              <i className="fab fa-react fa-2x" id="react-logo" />
            </li>
          </ul>
        </div>
      </nav>
  );
}
