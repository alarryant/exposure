import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Navbar from './Navbar.jsx';
import Search from './Search.jsx';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchWord: ""
    };

    this.searchResult = this.searchResult.bind(this)

  }

searchResult(word) {
  console.log("I'm in App.js Search Result function")
}


  componentDidMount() {

    //This is how you use axios for get requests! Axios is like an ajax library
    // axios.get("/")
    //   .then(res => console.log(res.data));

    // axios.get("/search")
    //   .then(res => console.log(res.data));

    // axios.get("/artist/:id")
    //   .then(res => console.log(res.data));

    // axios.get("/artist/:id/dashboard")
    //   .then(res => console.log(res.data));

    // axios.get("/opportunity")
    //   .then(res => console.log(res.data));

    // axios.get("/client/:id/dashboard")
    //   .then(res => console.log(res.data));
  }

  render() {
    return (
      <div>
      <Navbar />
      <Search searchResult = { this.searchResult }/>
      </div>
    );
  }
}

export default App;
