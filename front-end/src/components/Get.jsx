/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Get() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/films');
        setFilms(response.data);
      } catch (err) {
        alert(`No existe este id(${err})`);
      }
    };
    getFilms();
  }, []);

  return (
    <div id="1" className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-6 container-form-get-all ">
          <div className="form-group">
            <h1
              style={{ textAlign: 'center' }}
              className="d-flex flex-row justify-content-center"
            >
              Get all Films
            </h1>
            <div className="get d-inline-flex w-100 align-items-center justify-content-center flex-wrap">
              {films.map((movie) => (
                <div className="d-flex flex-column m-2 text-center align-items-center justify-content-center">
                  <img src={movie.img} alt={movie.name} />
                  <p key={movie.id}>{movie.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Get;
