import React from 'react';
import { NavLink } from "react-router-dom"


class Navbar extends React.Component {

  render() {

  return (
    <nav>
      <NavLink to="/"><img className="logo" alt="Exposure Logo" src="/LOGO1-fast.gif" /></NavLink>
       <div className="dropdown-container">
        <div className="dropdown">
          <NavLink to="/"><button className="dropbtn">Home <i className="fas fa-bars"></i></button></NavLink>
          <div className="dropdown-content">
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/settings">Settings</NavLink>
          </div>
        </div>
      </div>
      <div className="userauth">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    </nav>
  )
}

}

export default Navbar;