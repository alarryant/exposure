import React, {Component} from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';
import SeeAvailability from './SeeAvailability.jsx';
// import ProfilePic from '../public/artist_profile.jpg';



// class Carousel extends React.Component {

// }


class ProfileDesc extends React.Component {
  render() {
    return (
      <div className="profiledesc">
        <h2>A little about me....</h2>
        <p>I have no fear of losing my life - if I have to save a koala or a crocodile or a kangaroo or a snake, mate, I will save it.
        I believe that education is all about being excited about something.
        Seeing passion and enthusiasm helps push an educational message.
        Where I live if someone gives you a hug it's from the heart.
        Yeah, I'm a thrill seeker, but crikey, education's the most important thing.
        So fear helps me from making mistakes, but I make lot of mistakes.</p>
      </div>
    )
  }
}

// https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
class AvailabilityCard extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  render() {
    return (
      <div className="profilebtn">
        <button onClick={this.showMenu}>
          Availability
        </button>

        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <SeeAvailability />
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

// https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
class PackagesCard extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  render() {
    return (
      <div className="profilebtn" >
        <button onClick={this.showMenu}>
          Packages
        </button>

        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button>testing</button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

class Profile extends React.Component {

  render() {

  return (

  <div className="profile">
    <Avatar />
    <ProfileDesc />
    <AvailabilityCard />
    <PackagesCard />
  </div>
  );
 }
}

export default Profile;