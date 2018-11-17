import React, {Component} from 'react';

class Navbar extends React.Component {

  render() {

  return (
    <nav>
      <a href="#"><img class="logo" src="/LOGO1-fast.gif" /></a>
      <div className="dropdown-container">
        <div className="dropdown">
          <button className="dropbtn">Home <i class="fas fa-bars"></i></button>
          <div className="dropdown-content">
            <a href="/dashboard">Dashboard</a>
            <a href="/settings">Settings</a>
          </div>
        </div>
      </div>
      <div className="userauth">
        <a href="/login">Login</a> | <a href="/signup">Sign up</a>
      </div>
    </nav>
  )
}

}

export default Navbar;