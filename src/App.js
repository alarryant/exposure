import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './Navbar.jsx';
import SearchBar from './SearchBar.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import SearchResults from './SearchResults.jsx';
import ErrorPath from './Error404.jsx';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Availability from './Availability.jsx';
// import Profile from './Profile.jsx';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {id: 1},
      categories: [],
      searchWord: "",
      availability: {
        start_date: null,
        end_date: null
      }
    };

    this.searchResult = this.searchResult.bind(this);
    // this.saveAvailability = this.saveAvailability.bind(this);

  }

searchResult(word) {
  console.log("I'm in App.js Search Result function");
  this.setState({searchWord: word});
  axios.post("/search", {searchWord: word})
   .then(res => this.setState({searchWord: word}));
}

// saveAvailability(dates) {
//   this.setState({availability: {start_date: dates.start_date, end_date: dates.end_date}});
//   axios.post(`/artists/${this.state.user.id}/availability`, {availability: this.state.availability})
//     .then(res => console.log(res.data, 'availability data received from server'));
// }


  componentDidMount() {

    //This is how you use axios for get requests! Axios is like an ajax library
    axios.get("/home")
      .then(res => this.setState({homecategory: res.data}));

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


    // <Home {category: this.state.categories}/>
    // <Availability saveAvailability = {this.saveAvailability }/>

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <SearchBar searchResult = { this.searchResult }/>
              <Switch>
            <Route path='/home' render={() => <Home homecategory={this.state.homecategory} />} />
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
