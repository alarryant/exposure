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
    this.renderDropdownContent = this.renderDropdownContent.bind(this);
  }

  handleSignout(event){
    event.preventDefault();
    this.props.logout(event);
  }

  renderDropdownContent(currentUserType){
    if(currentUserType === '1'){
      return (
        <NavLink to={'/artists/' + `${this.props.currentUser}`}>
          Profile
        </NavLink>
      )
    } else {
      return (
        <NavLink to="/dashboard">
          Dashboard
        </NavLink>
      )
    }
  }

  render() {
  return (
      <nav>
        { this.props.currentUser === null ?
        (<section className="notLoggedIn">
          <NavLink to="/">
          <div className="logo">
            <div className="lens"></div>
            <span href="#" className="logo">
              Exp
              <span className="lighter">
                o
              </span>
              sure
            </span>
          </div>
          </NavLink>
          <div className="userauth">
            <Login loginInfo = { this.props.loginInfo }/>
            <Signup signupInfo = { this.props.signupInfo }/>
          </div>
        </section>
        ) : (
        <section className="loggedIn">
          <NavLink className="logoWrap" to="/">
            <div className="logo">
              <div className="lens"></div>
              <span href="#" className="logo">
                Exp
                <span className="lighter">
                  o
                </span>
                sure
              </span>
            </div>
            <p className="loggedInAs">You are logged in as: <span>{this.props.currentUserName}</span></p>
          </NavLink>
          <div className="dropdown-container">
            <div className="dropdown">
              <NavLink to="/">
                <button className="dropbtn">
                  <i className="fas fa-bars"></i>
                </button>
              </NavLink>
              <div className="dropdown-content burger">
                {this.renderDropdownContent(this.props.currentUserType)}
                <NavLink to="/opportunities">
                  Opportunities
                </NavLink>
                <NavLink to="/settings">
                  Settings
                </NavLink>
              </div>
            </div>
          </div>
          <div className="userauth">
            <Button bsStyle="default"
                    bsSize="large"
                    type="submit"
                    onClick={this.handleSignout}>
              Logout
            </Button>
          </div>
        </section>
        )}
      </nav>
    )
  }
}

export default Navbar;