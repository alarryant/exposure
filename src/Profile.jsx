import React, {Component} from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';
import Availability from './Availability.jsx';
// import ProfilePic from '../public/artist_profile.jpg';



// class Carousel extends React.Component {

// }

class Avatar extends React.Component {
  render() {
    return (
      <div className="profilecontainer">
        <div className="profilepic-container">
          <img className="profilepic" src={require("./artist_profile.jpg")}/>
        </div>
        <h1>Steve Irwin</h1>
      </div>
    );
  }
}

class Profile extends React.Component {

  render() {

  return (

  <div className="profile">
    <Avatar />
    <div className="dropdown-container-profile">
      <div className="dropdown-profile">
        <button className="dropbtn-profile">Availability</button>
        <div className="dropdown-content-profile">
          <Availability />
        </div>
      </div>
    </div>
  </div>
  );
 }
}

export default Profile;