/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Show() {
  const [movies, setMovies] = useState([]);
  const [id, setId] = useState('');
  const [error, setError] = useState('');

  const getMovie = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/pelicula/${id}`);
      setMovies(response.data.data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('fallo axios', err);
      setError('Hubo un error al traer el pais');
    }
  };

  const handleChange = async (event) => {
    const e = event.target.value;
    setId(e);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovie();
    setId('');
  };

  return (
    <div id="2" className="section container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-6 container-form">
          <form className="form-group" action="" onSubmit={handleSubmit}>
            <h1 style={{ textAlign: 'center' }} className="d-flex flex-row justify-content-center">
              Get movie
            </h1>
            <input
              autoComplete="off"
              required
              type="number"
              placeholder="ID"
              className="form-control"
              name="idMovie"
              onChange={handleChange}
            />
            {' '}
            <br />
            <button type="submit" className="btn">
              Ready
            </button>
            {error}
            {movies.map((movie) => (
              <a style={{ marginLeft: '10px' }} key={movie.idPelicula} href={movie.img} target="_blank" rel="noreferrer">{movie.nombre}</a>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Show;
