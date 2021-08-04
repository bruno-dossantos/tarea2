import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Inicio() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row align-items-center index-bg">
          <div className="col-4">
            <div className="form-group">
              <h1 className="index-title">Peliculas</h1>
              <p className="index-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="form-group d-flex flex-row justify-content-center">
              <a href="./Get.jsx">
                <button className="index-btn btn" type="submit">Comenzar →</button>
              </a>
            </div>
          </div>
          <div className="col-8 index-img">
            <img className="bg-inicio" src="https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80" alt="foto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
