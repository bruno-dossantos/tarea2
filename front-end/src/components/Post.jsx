/* eslint-disable no-alert */
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Post() {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');

  const postMovie = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/films', {
        name: `${name}`,
        img: `${img}`,
      });
      // eslint-disable-next-line no-alert
      alert('Pelicula creada con exito!');
    } catch (err) {
      alert(`No se puede crear esta pelicula(${err})`);
    }
  };

  const handleChangeName = (event) => {
    const e = event.target.value;
    setName(e);
  };

  const handleChangeImg = (event) => {
    const e = event.target.value;
    setImg(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postMovie();
    setName('');
    setImg('');
  };

  return (
    <div id="3" className="section container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-6 container-form">
          <form onSubmit={handleSubmit} className="form-group">
            <h1 style={{ textAlign: 'center' }} className="d-flex flex-row justify-content-center">
              Post movie
            </h1>
            <input
              autoComplete="off"
              required
              type="text"
              placeholder="Name"
              className="form-control"
              name="name"
              value={name}
              onChange={handleChangeName}
            />
            {' '}
            <input
              autoComplete="off"
              type="url"
              placeholder="Image"
              className="form-control"
              name="img"
              value={img}
              onChange={handleChangeImg}
            />
            <button type="submit" className="btn">
              Ready
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Post;
