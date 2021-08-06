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
          <div className="col-6 container-form">
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
              <a style={{ marginLeft: '10px' }} href="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49AC21526EAD9DC631160FC842FAC9F6557C70439E0793BB4D6C6BFFDB2DD68A/scale?width=1200&aspectRatio=1.78&format=jpeg" target="_blank" rel="noreferrer">Cars 2</a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
