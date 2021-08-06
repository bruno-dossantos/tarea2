import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Get extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="3" className="section container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-6 ">
            <form className="form-group" action="">
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
                name="nameMovie"
              />
              {' '}
              <input
                autoComplete="off"
                type="url"
                placeholder="Image"
                className="form-control"
                name="imgMovie"
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
}
