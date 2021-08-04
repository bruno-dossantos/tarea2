import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Navbar from './Navbar';

export default class Get extends React.Component {
    state = {
      movies: [],
    }

    componentDidMount() {
      axios.get('http://127.0.0.1:8000/api/pelicula')
        .then((res) => {
          const movies = res.data;
          this.setState({ movies });
        });
    }

    render() {
      return (
        <div className="container-fluid">
          <Navbar />
          <div className="row justify-content-center align-items-center">
            <div className="col-6 ">
              <div className="form-group">
                <h1 style={{ textAlign: 'center' }} className="d-flex flex-row justify-content-center">Consultar cantidad de usuarios por grupo de edad</h1>
                <label style={{ marginTop: '15px' }} className="navbar-brand">Seleccione rango de edad*</label>
                <div className="d-flex justify-content-center">
                  <select required className="form-select form-select-sm">
                    {this.state.movies.map((movies) => <option>{movies.nombre}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

      );
    }
}
