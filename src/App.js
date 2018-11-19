import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './Navbar.jsx';
import SearchBar from './SearchBar.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import SearchResults from './SearchResults.jsx';
import ErrorPath from './Error404.jsx';
import Profile from './Profile.jsx';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Availability from './Availability.jsx';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {id: 1},
      // categories: [],
      searchWord: "",
      redirect: false,
      availability: {
        start_date: null,
        end_date: null
      }
    };

    this.searchResult = this.searchResult.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
    // this.saveAvailability = this.saveAvailability.bind(this);

  }

// saveAvailability(dates) {
//   this.setState({availability: {start_date: dates.start_date, end_date: dates.end_date}});
//   axios.post(`/artists/${this.state.user.id}/availability`, {availability: this.state.availability})
//     .then(res => console.log(res.data, 'availability data received from server'));
// }


  //SEARCH FEATURE
  searchResult(word) {
    axios.post("/search", {searchWord: word})
     .then((res) => {
        this.setState({redirect: true, searchWord: word});
      });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      this.setState({redirect: false})
      return <Redirect to='/search' />
    }
  }

  componentDidMount() {

    //This is how you use axios for get requests! Axios is like an ajax library

    axios.get("/homephotos")
      .then(res => this.setState({homephotos: res.data}));

    axios.get("/featured")
      .then(res => this.setState({featuredphotos: res.data}));

    axios.get("/packages")
      .then(res => this.setState({packages: res.data}));


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

    // <Availability saveAvailability = {this.saveAvailability }/>

  }

            // <Route path='/search' name='search' component={SearchResults} searchWord={this.state.searchWord} />

  render() {
    console.log("this is app.jsx", this.state.packages);
    return (
      <BrowserRouter>
        <div>
          {this.renderRedirect()}
          <Navbar />
          <SearchBar searchResult = { this.searchResult }/>
          <Switch>
            <Route path='/home' render={() => <Home homephotos={this.state.homephotos} />} />
            <Route path='/profile' render={() => <Profile featuredphotos={this.state.featuredphotos}
                                                          packages={this.state.packages}/>} />
            <Route path='/search' name='search' render={() => <SearchResults searchWord={this.state.searchWord} />} />
            <Route component={ErrorPath} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
