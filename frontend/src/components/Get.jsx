import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Navbar from './Navbar';

export default class Get extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/pelicula')
      .then((res) => {
        const movies = res.data;
        this.setState({ movies });
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="row justify-content-center align-items-center">
          <div className="col-6 ">
            <div className="form-group">
              <h1 style={{ textAlign: 'center' }} className="d-flex flex-row justify-content-center">Get all movies</h1>
              <p style={{ marginTop: '15px' }}>List of movies</p>
              <div className="d-flex justify-content-center">
                <select required className="form-select form-select-sm">
                  {movies.map(() => (
                    <option>
                      {movies.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
