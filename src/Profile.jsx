import React, {Component} from 'react';
import SeeAvailability from './SeeAvailability.jsx';
import Portfolio from './Portfolio.jsx';
import Slider from "react-slick";

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
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.renderPricePackage = this.renderPricePackage.bind(this);
  }

  renderPricePackage(pricepackages=[]) {
    let tier;
    return pricepackages.map(function(pricepackage) {
      if (pricepackage.tier === 1) {
      let tier = "Basic";
    } else if (pricepackage.tier === 2) {
      let tier = "Intermediate";
    } else {
      let tier = "Deluxe";
    }
      return (
        <div>
          <h5>{tier}</h5><br/>
          <p>{pricepackage.price}</p>
        </div>
        )
    })

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
    console.log("this is packages from server", this.props.packages);
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
              {this.renderPricePackage(this.props.packages)}
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

  constructor(props) {
    super(props);

    this.addCarouselPhotos = this.addCarouselPhotos.bind(this);
  }

  addCarouselPhotos(photos=[]) {
    return photos.map(function(photo) {
      return (
        <div className="sliderImg" >
          <img alt="900x500" src={photo.src} />
        </div>
        )
    });
  }

  render() {
    const settings = {
      infinite: true,
      centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      rows: 1,
      autoplay: true,
      focusOnSelect: true,
    };


  return (

  <div className="profile">
    <Avatar />
    <ProfileDesc />
    <div className="featuredPortfolio">
      <h1>Featured Photos:</h1>
      <Slider {...settings} >
        {this.addCarouselPhotos(this.props.featuredphotos)}
      </Slider>
      <br />
      <a href="/portfolio"><h5>See full portfolio</h5></a>
    </div>
    <Portfolio />
    <AvailabilityCard />
    <PackagesCard packages={this.props.packages}/>
  </div>
  );
 }
}

export default Profile;