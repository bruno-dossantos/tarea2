import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-default navbar-static-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="frontend\src\components\Inicio.jsx">
          Movies
        </a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="./Get.jsx">
                Get all
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Show.jsx">
                Get
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Post.jsx">
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
