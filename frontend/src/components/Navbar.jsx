import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-default navbar-static-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="./index.jsx">
          Peliculas
        </a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="./get.jsx">
                Ver todas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./show.jsx">
                Ver por ID
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./post.jsx">
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
