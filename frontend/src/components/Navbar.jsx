import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-default navbar-static-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="./Inicio.jsx">
          Peliculas
        </a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="./Get.jsx">
                Ver todas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Show.jsx">
                Ver por ID
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Post.jsx">
                Publicar una
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
