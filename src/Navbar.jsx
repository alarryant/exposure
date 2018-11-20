import React from 'react';
import { NavLink } from "react-router-dom"

import Login from './Login'
import Signup from './Signup';


class Navbar extends React.Component {

  render() {
  return (
    
    <nav>
      <NavLink to="/"><img className="logo" alt="Exposure Logo" src="/LOGO1-fast.gif" /></NavLink>
       <div className="dropdownContainer">
        <div className="dropdown">
          <NavLink to="/"><button className="dropbtn">Home <i className="fas fa-bars"></i></button></NavLink>
          <div className="dropdownContent">
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/settings">Settings</NavLink>
          </div>
        </div>
      </div>
      <div className="userauth">
        <Login loginInfo={this.props.loginInfo}/>
        <Signup signupInfo={this.props.signupInfo}/>
      </div>
    </nav>
  )
}

}

export default Navbar;