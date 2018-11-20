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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      websiteUrl: "",
      instagramUrl: "",
      facebookUrl: "",
      twitterUrl: "",
      location: "",
      redirect: false,
      availability: {
        start_date: null,
        end_date: null
      }
    };

    this.loginInfo = this.loginInfo.bind(this);
    this.signupInfo = this.signupInfo.bind(this);
    this.searchResult = this.searchResult.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
    // this.saveAvailability = this.saveAvailability.bind(this);

  }

// saveAvailability(dates) {
//   this.setState({availability: {start_date: dates.start_date, end_date: dates.end_date}});
//   axios.post(`/artists/${this.state.user.id}/availability`, {availability: this.state.availability})
//     .then(res => console.log(res.data, 'availability data received from server'));
// }


  //LOGIN FEATURE
  loginInfo(email, password) {
    axios.post("/login", {email: email, password: password})
     .then((res) => {
        this.setState({redirect: true, email: email, password: password});
      });
  }

  //REGISTER FEATURE
  signupInfo(firstName, lastName, email, password, userType) {
    axios.post("/register", {firstName:firstName, lastName:lastName, email: email, password: password, userType: userType})
     .then((res) => {
       console.log("I'm back on Client", res.data)
        this.setState({redirect: true, firstName:firstName, lastName:lastName, email: email, password: password, userType: userType});
      });
  }

  //EDIT PROFILE FEATURE
  editProfileInfo(firstName, lastName, email, password, website, instagram, facebook, twitter, location) {
    axios.post("/search", {firstName:firstName, lastName:lastName, email: email, password: password, website: website, instagram: instagram, facebook: facebook, twitter: twitter, location: location})
     .then((res) => {
        this.setState({redirect: true, firstName:firstName, lastName:lastName, email: email, password: password, website: website, instagram: instagram, facebook: facebook, twitter: twitter, location: location});
      });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      this.setState({redirect: false})
      return <Redirect to='/search' />
    }
  }


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


  render() {
    console.log("this is app.jsx", this.state.packages);
    return (
      <BrowserRouter>
        <div>
          {this.renderRedirect()}
          <Navbar loginInfo = { this.loginInfo }
                  signupInfo = { this.signupInfo }/>
          <SearchBar searchResult = { this.searchResult }/>
          <Switch>
            <Route path='/home' render={() => <Home homephotos={this.state.homephotos} />} />
            <Route path='/profile' render={() => <Profile featuredphotos={this.state.featuredphotos}
                                                          packages={this.state.packages}/>} />
            <Route path='/search' name='search' render={() => <SearchResults searchWord={this.state.searchWord} />} />
            <Route exact path="/" render={() => (<Redirect to="/home" />)} />
            <Route component={ErrorPath} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
