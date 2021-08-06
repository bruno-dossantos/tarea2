import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-default position-fixed">
      <div className="container-fluid">
        <a className="navbar-brand" href="./Inicio.jsx">
          Movies
        </a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav navbar-expand-lg">
            <li className="nav-item">
              <a className="nav-link" href="#1">
                Get all
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#2">
                Get
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#3">
                Post
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
