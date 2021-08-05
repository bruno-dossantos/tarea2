/* eslint-disable jsx-a11y/label-has-associated-control */
import './App.css';
import React from 'react';
import Get from './components/Get';
import Post from './components/Post';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Show from './components/Show';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio />
      <Get />
      <Show />
      <Post />
    </div>
  );
}

export default App;
