import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Get from './Get';
import Post from './Post';
import Show from './Show';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-default position-fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href=".">
              Movies
            </a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav navbar-expand-lg">
                <li className="nav-item">
                  <Link to="/">Get all </Link>
                </li>
                <li className="nav-item">
                  <Link to="/post">Post</Link>
                </li>
                <li className="nav-item">
                  <Link to="/show">Get</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/post">
            <PostSection />
          </Route>
          <Route path="/show">
            <ShowSection />
          </Route>
          <Route path="/">
            <GetSection />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function GetSection() {
  return <Get />;
}

function PostSection() {
  return <Post />;
}

function ShowSection() {
  return <Show />;
}
