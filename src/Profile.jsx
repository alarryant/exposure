import React, {Component} from 'react';
import SeeAvailability from './SeeAvailability.jsx';
import Portfolio from './components/Portfolio.jsx';
import Avatar from './components/Avatar.jsx';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Url from 'url-parse';

class ProfileDesc extends React.Component {
  render() {
    return (
      <div className="profiledesc">
        <p>{this.props.bio}</p>
      </div>
    )
  }
}

class SocialMedia extends React.Component {
  constructor(props) {
    super(props);

    this.parseUrl = this.parseUrl.bind(this);
  }

  parseUrl(url) {
      let newUrl = new Url(url);
      let trimmedUrl = newUrl.pathname.replace(/^\/|\/$/g, '');
      return trimmedUrl;
  }

  render () {

    return (
      <div className="socialMediaContainer">
        {this.props.facebook !== "null" ?
          (
          <p>
            <i className="fab fa-facebook-f"></i>
            <a href={this.props.facebook} target="_blank"> {this.parseUrl(this.props.facebook)}</a>
          </p>) : ''}
        {this.props.twitter !== "null" ?
        (
        <p>
          <i className="fab fa-twitter"></i>
          <a href={this.props.twitter} target="_blank"> {this.parseUrl(this.props.twitter)}</a>
        </p>) : ''}
        {this.props.instagram !== "null" ?
          (
          <p><i className="fab fa-instagram"></i>
            <a href={this.props.instagram} target="_blank">{this.parseUrl(this.props.instagram)}</a>
          </p>) : ''}
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
      tier = "Basic";
    } else if (pricepackage.tier === 2) {
      tier = "Intermediate";
    } else if (pricepackage.tier === 3) {
      tier = "Deluxe";
    }
      return (
        <div>
          <h5>{tier}</h5>
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
    this.state = {
      artist: {},
      photoview: 'featured'
    }
    this.addCarouselPhotos = this.addCarouselPhotos.bind(this);
    this.areFeaturedPhotos = this.areFeaturedPhotos.bind(this);
    this.showPortfolio = this.showPortfolio.bind(this)
    this.showFeatures = this.showFeatures.bind(this)
  }

  areFeaturedPhotos(photos=[]) {
    return photos.filter(photo => photo.featured.includes("true"));
  }

  addCarouselPhotos(photos=[]) {
    let filteredPhotos = this.areFeaturedPhotos(photos);

    return filteredPhotos.map(function(photo) {
      return (
        <div className="sliderImg" >
          <img alt="900x500" src={photo.src} />
        </div>
        )
    });
  }

  showPortfolio = () => {
    this.setState({photoview: "portfolio"})
  }

  showFeatures = () => {
    this.setState({photoview: "featured"})
  }

  componentDidMount() {

    const { id } = this.props.match.params;

    axios.get(`/artists/${ id }`, {
      params: {
        artistId: id
      }
    })
    .then((res) => {
      let collection = res.data.images;
      let packages = res.data.packages;
      let bio = res.data.images[0].bio;
      let fullName = res.data.images[0].first_name + ' ' + res.data.images[0].last_name;
      let avatarImage = res.data.images[0].profile_image;
      let twitter = res.data.images[0].twitter_url;
      let facebook = res.data.images[0].facebook_url;
      let instagram = res.data.images[0].instagram_url;
      this.setState({redirect: true, twitter: twitter, facebook: facebook, instagram: instagram, fullName: fullName, avatarImage: avatarImage, packages: packages, collection: collection, bio: bio});
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

    if(this.state.photoview === 'featured') {
      return (
      <div className="profile">
        <Avatar name={ this.state.fullName } avatar={ this.state.avatarImage }/>
        <ProfileDesc bio={this.state.bio}/>
        <SocialMedia twitter={this.state.twitter} facebook={this.state.facebook} instagram={this.state.instagram}/>
      <div className="featuredPortfolio">
        <button onClick={this.showPortfolio}>
          View Portfolio
        </button>
        <button onClick={this.showFeatures}>
          Featured Photos
        </button>
        <h1>Featured Photos:</h1>
        <Slider {...settings} >
          {this.addCarouselPhotos(this.state.collection)}
        </Slider>
        <br />
      </div>
        <AvailabilityCard />
        <PackagesCard packages={this.props.packages}/>
      </div>
      );
    } else {
      return (
        <div className="profile">
          <Avatar name={ this.state.fullName } avatar={ this.state.avatarImage }/>
          <ProfileDesc bio={this.state.bio}/>
          <SocialMedia twitter={this.state.twitter} facebook={this.state.facebook} instagram={this.state.instagram}/>
        <div className="featuredPortfolio">
          <button onClick={this.showPortfolio}>
            View Portfolio
          </button>
          <button onClick={this.showFeatures}>
            Featured Photos
          </button>
          <h1>Portfolio Photos:</h1>
          <Portfolio artistPhotos={this.state.collection} />
        </div>
          <AvailabilityCard />
          <PackagesCard packages={this.props.packages}/>
        </div>
    )}
  }
}

export default Profile;