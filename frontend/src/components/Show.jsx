import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="2" className="section container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-6 ">
            <form className="form-group" action="">
              <h1
                style={{ textAlign: 'center' }}
                className="d-flex flex-row justify-content-center"
              >
                Get movie
              </h1>
              <input
                autoComplete="off"
                required
                type="number"
                placeholder="ID"
                className="form-control"
                name="idMovie"
              />
              {' '}
              <br />
              <button type="submit" className="btn">
                Ready
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
