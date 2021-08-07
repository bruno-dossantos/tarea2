import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Post() {
  /*   constructor(props) {
      super(props);
      this.state = {
        id: '',
        img: '',
      };
    } */

  const [movie, setMovie] = useState([]);
  const [error, setError] = useState('');

  const postMovie = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/pelicula');
      setPaises(response);
    } catch (err) {
      console.error('fallo axios', err);
      setError('Hubo un error al traer los paises');
    }
  };

  /*   componentDidMount() {
      document.title = 'Get all movies';
      axios.get('http://127.0.0.1:8000/api/pelicula').then((res) => {
        const movies = res.data;
        this.setState({ movies });
      });
    } */
  chageHandler = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/pelicula');
  };

  return (
    <div id="3" className="section container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-6 container-form">
          <form onSubmit={this.submitHandler} className="form-group">
            <h1
              style={{ textAlign: 'center' }}
              className="d-flex flex-row justify-content-center"
            >
              Post movie
            </h1>
            <input
              autoComplete="off"
              required
              type="text"
              placeholder="Name"
              className="form-control"
              name="nombre"
              onChange={this.chageHandler}
            />
            {' '}
            <input
              autoComplete="off"
              type="url"
              placeholder="Image"
              className="form-control"
              name="img"
              onChange={this.chageHandler}
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
