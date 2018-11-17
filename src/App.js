import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Navbar from './Navbar.jsx';

class App extends Component {
  componentDidMount() {
    axios.get("/test_json")
    .then(res => console.log(res.data.success));
  }
  render() {
    return (
      <div>
      <Navbar />
      </div>
    );
  }
}

export default App;
