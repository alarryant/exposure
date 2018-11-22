
import React from 'react';
import Portfolio from './components/Portfolio';
import EditPortfolio from './components/Profile_Portfolio_Edit';
import Avatar from './components/Avatar.jsx';
import Slider from "react-slick";
// import { Link } from 'react-router-dom';
import axios from 'axios';
// import EditProfile from './EditProfile';
import SocialMedia from './components/Profile_SocialMedia.jsx';
import EditSocialMedia from './components/Profile_SocialMedia_Edit';
import ProfileDesc from './components/Profile_Desc.jsx';
import EditProfileDesc from './components/Profile_Desc_Edit.jsx';
import ReviewsCard from './components/Profile_Reviews.jsx';
import AvailabilityCard from './components/Profile_Availability.jsx';
import PackagesCard from './components/Profile_Packages.jsx';
import EditPackagesCard from './components/Profile_Packages_Edit.jsx';
import StarPhotographer from './components/Profile_Star.jsx';
import './styles/Profile.css';
import './styles/SearchResults.css';


class MailButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <a href={`mailto:${this.props.email}?subject=${this.props.name}would like to book you for a photoshoot.`} >Contact Me</a>
      </div>
    )
  }
}

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      artist: {},
      photoView: 'featured',
      editable: false
    }

    this.addCarouselPhotos = this.addCarouselPhotos.bind(this);
    this.areFeaturedPhotos = this.areFeaturedPhotos.bind(this);
    this.showPortfolio = this.showPortfolio.bind(this);
    this.showFeatures = this.showFeatures.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
  }

  areFeaturedPhotos(photos = []) {
    return photos.filter(photo => photo.featured.includes("true"));
  }

  addCarouselPhotos(photos = []) {
    let filteredPhotos = this.areFeaturedPhotos(photos);

    return filteredPhotos.map(function (photo) {
      return (
        <div className="sliderImg" >
          <img alt="900x500" src={photo.src} />
        </div>
      )
    });
  }

  showPortfolio = () => {
    this.setState({ photoView: "portfolio" })
  }

  showFeatures = () => {
    this.setState({ photoView: "featured" })
  }

  componentDidMount() {

    const { id } = this.props.match.params;

    this.setState({ artistId: id });

    axios.get(`/artists/${id}`, {
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
        let reviews = res.data.reviews;
        let email = res.data.images[0].email;

        this.setState({
          redirect: true,
          twitter: twitter,
          facebook: facebook,
          instagram: instagram,
          fullName: fullName,
          avatarImage: avatarImage,
          packages: packages,
          collection: collection,
          bio: bio,
          reviews: reviews,
          email: email
        });
      });
  }

  handleClickEdit() {
    if (this.state.editable === false) {
      console.log("editable now");
      this.setState({editable: true})
    } else {
      this.setState({editable: false})
    }
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
      <div>
      <button onClick={this.handleClickEdit}>Edit</button>
      {this.state.editable ? (
        <form>

          <div className="profile">
            <Avatar name={this.state.fullName}
              avatar={this.state.avatarImage} />
            <MailButton email={this.state.email}
              name={this.props.currentUserName} />
            <StarPhotographer currentUser={this.props.currentUser}
              artistId={this.state.artistId} />
            <EditProfileDesc bio={this.state.bio} />
            <EditSocialMedia twitter={this.state.twitter}
                             facebook={this.state.facebook}
                             instagram={this.state.instagram} />
            <div className="featuredPortfolio">
              <div>

                <h1>Portfolio Photos:</h1>
                <div>
                  <EditPortfolio artistPhotos={this.state.collection} />
                </div>
              </div>
            </div>
          <AvailabilityCard currentUser={this.propscurrentUser}
            disabledDays={this.state.disabledDays}
            artistId={this.state.artistId} />
            <EditPackagesCard packages={this.state.packages} />
          </div>
        </form>


        ) : (

        <div className="profile">
        <Avatar name={this.state.fullName}
          avatar={this.state.avatarImage} />
        <MailButton email={this.state.email}
          name={this.props.currentUserName} />
        <StarPhotographer currentUser={this.props.currentUser}
          artistId={this.state.artistId} />
        <ProfileDesc bio={this.state.bio} />
        <SocialMedia twitter={this.state.twitter}
          facebook={this.state.facebook}
          instagram={this.state.instagram} />
        <div className="featuredPortfolio">
          <button onClick={this.showPortfolio}>
            View Portfolio
          </button>
          <button onClick={this.showFeatures}>
            Featured Photos
          </button>
          {this.state.photoView === 'featured' ? (
            <div>
              <Slider {...settings} >
                {this.addCarouselPhotos(this.state.collection)}
              </Slider>
              <br />
            </div>
          ) : (
              <div>
                <h1>Portfolio Photos:</h1>
                <Portfolio artistPhotos={this.state.collection} />
              </div>
            )}
        </div>
        <AvailabilityCard currentUser={this.propscurrentUser}
          disabledDays={this.state.disabledDays}
          artistId={this.state.artistId} />
        <PackagesCard packages={this.state.packages} />
        <ReviewsCard reviews={this.state.reviews} />
      </div>)}
        </div>

    )
  }
}

export default Profile;