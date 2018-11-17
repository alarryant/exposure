import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './Navbar.jsx';
import SearchBar from './SearchBar.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import SearchResults from './SearchResults.jsx'
import ErrorPath from './Error404.jsx'
import { BrowserRouter, Route, Switch } from "react-router-dom";


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      searchWord: ""
    };

    this.searchResult = this.searchResult.bind(this);

  }

searchResult(word) {
  console.log("I'm in App.js Search Result function");
  this.setState({searchWord: word});
  axios.post("/search", {searchWord: word})
   .then(res => console.log(res.data, 'Data received from Server!'));
}



  componentDidMount() {

    //This is how you use axios for get requests! Axios is like an ajax library
    // axios.get("/")
    //   .then(res => console.log(JSON.parse(res.data)));

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
      <BrowserRouter>
        <div>
          <Navbar />
          <SearchBar searchResult = { this.searchResult }/>

          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/search' component={SearchResults} />
            <Route component={ErrorPath} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
