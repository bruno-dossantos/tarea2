/* eslint-disable no-alert */
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Show() {
  const [films, setFilms] = useState([]);
  const [id, setId] = useState('');

  const getMovie = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/films/${id}`);
      setFilms(response.data.data);
    } catch (err) {
      alert(`No existe este id(${err})`);
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
              value={id}
              onChange={handleChange}
            />
            {' '}
            <br />
            <button type="submit" className="btn">
              Ready
            </button>
            {films.map((movie) => (
              <a style={{ marginLeft: '10px' }} key={movie.id} href={movie.img} target="_blank" rel="noreferrer">{movie.name}</a>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Show;
