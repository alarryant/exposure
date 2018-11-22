import React from 'react';
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';
import './styles/NavBar.css';

import Login from './Login';
import Signup from './Signup';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    
    this.handleSignout = this.handleSignout.bind(this);
  }
  

  handleSignout(event){
    event.preventDefault();
    this.props.logout(event);
  }

  render() {
  return (
      <nav>
        { this.props.currentUser === null ?
        (<section className="notLoggedIn">
          <NavLink to="/">
          <div className="logo">
            <div className="lens"></div>
            <span href="#" className="logo">Exp<span className="lighter">o</span>sure</span>
          </div>
          </NavLink>
          <div className="userauth">
            <Login loginInfo = {this.props.loginInfo}/>
            <Signup signupInfo = { this.props.signupInfo }/>
          </div>
        </section>)
        :
        (<section className="loggedIn">
          <NavLink to="/">
            <div className="logo">
              <div className="lens"></div>
              <span href="#" className="logo">Exp<span className="lighter">o</span>sure</span>
            </div>
          </NavLink>
          <div className="dropdown-container">
            <div className="dropdown">
              <NavLink to="/">
                <button className="dropbtn">Home<i className="fas fa-bars"></i></button>
              </NavLink>
              <div className="dropdown-content">
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/settings">Settings</NavLink>
                <NavLink to="/opportunities">Opportunities</NavLink>
              </div>
            </div>
          </div>
          <div className="userauth">
            <Button bsStyle="default" bsSize="large" type="submit" onClick={this.handleSignout}>Logout</Button>
          </div>
        </section>)
        }
      </nav>
    )
  }
}

export default Navbar;