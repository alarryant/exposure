import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './Navbar.jsx';
import SearchBar from './SearchBar.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Dashboard from './Dashboard.jsx';
import SearchResults from './SearchResults.jsx';
import ErrorPath from './Error404.jsx';
import Profile from './Profile.jsx';
import { BrowserRouter, Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import { createMemoryHistory } from 'history'; 
import Availability from './components/Availability.jsx';
import Portfolio from './components/Portfolio.jsx';

const history = createMemoryHistory({
  forceRefresh: false
});

class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      user: { id: 1 },
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
      // currentUser: null,
      redirect: false,
      availability: {
        start_date: null,
        end_date: null
      }
    };

    this.loginInfo = this.loginInfo.bind(this);
    this.logout = this.logout.bind(this);
    this.signupInfo = this.signupInfo.bind(this);
    this.searchResult = this.searchResult.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
    // this.saveAvailability = this.saveAvailability.bind(this);


    history.listen((location, action) => {
      console.log("HISTORY CHANGE", action, location);
      console.log(history.entries);
    });
  }

  // saveAvailability(dates) {
  //   this.setState({availability: {start_date: dates.start_date, end_date: dates.end_date}});
  //   axios.post(`/artists/${this.state.user.id}/availability`, {availability: this.state.availability})
  //     .then(res => console.log(res.data, 'availability data received from server'));
  // }


  //LOGIN FEATURE
  loginInfo(email, password) {
    axios.post("/login", { email: email, password: password })
      .then((res) => {
        localStorage.setItem('currentUser', res.data[0].id);
        this.setState({ redirect: true });
      });
  }

  //LOGOUT FEATURE
  logout(event) {
    axios.post("/logout")
      .then((res) => {
        console.log("res.data: ", res.data);
        localStorage.removeItem('currentUser');
        this.setState({ redirect: true });
      });
  }


  //REGISTER FEATURE
  signupInfo(firstName, lastName, email, password, userType) {
    axios.post("/register", { firstName: firstName, lastName: lastName, email: email, password: password, userType: userType })
      .then((res) => {
        localStorage.setItem('currentUser', res.data[0].id);
        this.setState({ redirect: true });
      });
  }

  //EDIT PROFILE FEATURE
  editProfileInfo(firstName, lastName, email, password, website, instagram, facebook, twitter, location) {
    axios.post("/search", { firstName: firstName, lastName: lastName, email: email, password: password, website: website, instagram: instagram, facebook: facebook, twitter: twitter, location: location })
      .then((res) => {
        this.setState({ redirect: true, firstName: firstName, lastName: lastName, email: email, password: password, website: website, instagram: instagram, facebook: facebook, twitter: twitter, location: location });
      });
  }

  //SEARCH FEATURE
  searchResult(word) {
    axios.get("/search", {
      params: {
        searchWord: word
      }
    })
      .then((res) => {
        console.log("SearchResult, App.js", res)
        this.setState({ redirect: true, searchWord: word, searchimages: res.data });
      });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      this.setState({ redirect: false })
      return <Redirect to='/search' />
    }
  }

  componentDidMount() {

    //This is how you use axios for get requests! Axios is like an ajax library

    axios.get("/homephotos")
      .then(res => this.setState({ homephotos: res.data }));

    axios.get("/featured")
      .then(res => this.setState({ featuredphotos: res.data }));

    axios.get("/packages")
      .then(res => this.setState({ packages: res.data }));

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
    const currentUser = localStorage.getItem('currentUser');
    const routerInstance = (
      <Router history={history}>
        <div>
          {this.renderRedirect()}
          <Navbar loginInfo={this.loginInfo}
            signupInfo={this.signupInfo}
            currentUser={currentUser}
            logout={this.logout} />
          <SearchBar searchResult={this.searchResult} />
          <Switch>
            <Route path='/home' render={() => <Home homephotos={this.state.homephotos} />} />
            <Route path='/artists/:id' render={props => <Profile
              {...props}
              featuredphotos={this.state.featuredphotos}
              packages={this.state.packages}
              currentUser={currentUser} />} />
            <Route path='/dashboard' name='dashboard' render={(props) => <Dashboard {...props} />} />
            <Route path='/search' name='search' render={props => <SearchResults
              {...props}
              searchWord={this.state.searchWord}
              searchimages={this.state.searchimages} />} />
            <Route exact path="/" render={() => (<Redirect to="/home" />)} />
            <Route component={ErrorPath} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
    // console.log('router:', routerInstance);
    // console.log('router child context:', JSON.stringify(routerInstance.type, null, 2));
    return routerInstance;
  }
}

export default App;
