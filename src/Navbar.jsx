import React, {Component} from 'react';

class Navbar extends React.Component {

  render() {

  return (
    <nav>
      <a href="#"><img class="logo" src="/LOGO1-fast.gif" /></a>
      <div>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  )
}

}

export default Navbar;