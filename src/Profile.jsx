import React from 'react';
import Portfolio from './components/Portfolio';
import EditPortfolio from './components/Profile_Portfolio_Edit';
import Avatar from './components/Avatar.jsx';
import Slider from "react-slick";
// import { Link } from 'react-router-dom';
import axios from 'axios';
import SocialMedia from './components/Profile_SocialMedia.jsx';
import EditSocialMedia from './components/Profile_SocialMedia_Edit';
import ProfileDesc from './components/Profile_Desc.jsx';
import EditProfileDesc from './components/Profile_Desc_Edit.jsx';
import ReviewsCard from './components/Profile_Reviews.jsx';
import AvailabilityCard from './components/Profile_Availability.jsx';
import PackagesCard from './components/Profile_Packages.jsx';
import EditPackagesCard from './components/Profile_Packages_Edit.jsx';
import StarPhotographer from './components/Profile_Star.jsx';
import AddReview from './components/AddReview.jsx';
import './styles/Profile.css';
import './styles/SearchResults.css';



class MailButton extends React.Component {
  render() {
    return (
      <div>
        <a href={`mailto:${this.props.email}?subject=${this.props.name} would like to book you for a photoshoot.`}>
          Contact Me
        </a>
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
      editable: false,
      // bio: "",
      // twitter: 'null',
      // facebook: 'null',
      // instagram: 'null',
      // avatarImage:
      // packages: [],
      // reviews: []
    }

    this.addCarouselPhotos = this.addCarouselPhotos.bind(this);
    this.areFeaturedPhotos = this.areFeaturedPhotos.bind(this);
    this.showPortfolio = this.showPortfolio.bind(this);
    this.showFeatures = this.showFeatures.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendSocialMediaForm = this.sendSocialMediaForm.bind(this);
    this.sendBioForm = this.sendBioForm.bind(this);
    this.sendPackageField = this.sendPackageField.bind(this);
    this.changeFeaturePhotos = this.changeFeaturePhotos.bind(this);
    this.createReview = this.createReview.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
  }

  areFeaturedPhotos(photos = []) {
    return photos.filter(photo => photo.featured.includes("true"));
  }

  addCarouselPhotos(photos = []) {
    let filteredPhotos = this.areFeaturedPhotos(photos);

    return filteredPhotos.map(function (photo) {
      return (
        <div className="sliderImg" key={ photo.id }>
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

  sendSocialMediaForm = (socialmedia) => {
    if (!socialmedia.twitter) {
      socialmedia.twitter = 'null'
    } else if (!socialmedia.facebook) {
      socialmedia.facebook = 'null'
    } else if (!socialmedia.instagram) {
      socialmedia.instagram = 'null'
    }

    this.setState({
      twitter: socialmedia.twitter,
      facebook: socialmedia.facebook,
      instagram: socialmedia.instagram,
    });
  }

  sendBioForm = (bio) => {
    this.setState({
      bio: bio
    })
  }

  sendPackageField = (fieldname, value) => {
    this.setState((prevState) => {
      let packages = prevState.packages;

      let [realName, packageIndex] = fieldname.split('_');
      if (packages[packageIndex]) {
        packages[packageIndex][realName] = value;
      } else {
        packages[packageIndex] = {
          [realName]: value
        }
      }
      return { packages };
    });
  }

  changeFeaturePhotos = (clickedPhotoSrc, clickedPhotoFeature) => {
    axios.post("/artists/:id/edit",
      { clickedPhotoSrc: clickedPhotoSrc,
        clickedPhotoFeature: clickedPhotoFeature })
    .then(res => {
      let newCollection = res.data;
      this.setState({ collection: newCollection });
    })
  }

  createReview(rating, review, artist, user) {
    axios.post("/artists/:id/newreview",
      { rating: rating,
        description: review,
        artist_id: artist,
        user_id: user })
      .then((res) => {
        let newReviews = res.data.reverse();
        this.setState({reviews: newReviews});
      });
  }

  deleteReview(review) {
    let artist_id = review.artist_id;
    let review_id = review.review_id;

    axios.post(`/artists/${artist_id}/reviews/${review_id}`, { review_id, artist_id})
    .then((res) => {
      let newReviews = res.data.reverse();
      this.setState({reviews: newReviews});
    })
  }

  componentDidMount() {

    if (this.props.location.pathname.includes("/editprofile") && Number(this.props.currentUser) === Number(this.props.match.params.id)) {
      this.setState({editable: true});
    }

    const { id } = this.props.match.params;

    this.setState({ artistId: id });

    axios.get(`/artists/${id}`, {
      params: {
        artistId: id,
        currentUser: this.props.currentUser
      }
    })
      .then((res) => {
        let avatarImage = res.data.user[0].profile_image;
        if (avatarImage === null) {
          avatarImage = '/images/default_avatar.png'
        }
        const profileData = {
          collection: res.data.images,
          packages: res.data.packages,
          bio: res.data.user[0].bio,
          fullName: res.data.user[0].first_name + ' ' + res.data.user[0].last_name,
          avatarImage: avatarImage,
          twitter: res.data.user[0].twitter_url,
          facebook: res.data.user[0].facebook_url,
          instagram: res.data.user[0].instagram_url,
          reviews: res.data.reviews,
          email: res.data.user[0].email,
          redirect: true
        };

         console.log("thisi s profile data", profileData);


        this.setState(profileData);
      });
  }

  handleClickEdit() {
    if (this.state.editable === false) {
      this.setState({editable: true})
      this.props.handleProfileEditPath(`artists/${this.props.currentUser}/editprofile`)
    } else {
      this.setState({editable: false})
      this.props.handleProfileEditPath(`artists/${this.props.currentUser}`)
    }
  }

  handleSubmit(event) {
    this.props.handleProfileEditPath(`artists/${this.props.currentUser}`);
    let submitData = {
      packages: this.state.packages,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      instagram: this.state.instagram,
      bio: this.state.bio
    }

    axios.post(`/artists/${this.state.artistId}/edit`,
      { artistId: this.state.artistId,
        submitData: submitData })
      .then((res) => {
        console.log("this is what im getting back from server", res.data);
        this.setState({ packages: res.data.packages,
                        twitter: res.data[0].twitter_url,
                        facebook: res.data[0].facebook_url,
                        instagram: res.data[0].instagram_url,
                        bio: res.data[0].bio })
      })
      .catch((err) => console.log(err))
  }

  render() {
    const { id } = this.props.match.params;

    const settings = {
      infinite: true,
      centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      rows: 1,
      autoplay: true,
      focusOnSelect: true,
    };

    this.numOfFeatured = this.areFeaturedPhotos(this.state.collection);

    return (
      <div>
      {this.props.currentUser === id ? (
        <button onClick={this.handleClickEdit}>
          {this.state.editable ? "Clear Changes" : "Edit"}
        </button>
      ) : (
        ''
      )}
      {this.state.editable ? (
        <form onSubmit={this.handleSubmit}>
          <div className="profile">
            <Avatar name={this.state.fullName}
                    avatar={this.state.avatarImage} />
            <h3>Description</h3>
            <EditProfileDesc bio={this.state.bio}
                             sendBioForm={this.sendBioForm} />
            <EditSocialMedia twitter={this.state.twitter}
                             facebook={this.state.facebook}
                             instagram={this.state.instagram}
                             sendSocialMediaForm={this.sendSocialMediaForm} />
            <div className="featuredPortfolio">
              <div>

                <h3>Select Feature Photos ({this.numOfFeatured.length}/10):</h3>
                <div>
                  <EditPortfolio
                    changeFeaturePhotos={this.changeFeaturePhotos}
                    artistPhotos={this.state.collection} />
                </div>
              </div>
            </div>
            <AvailabilityCard currentUser={this.props.currentUser}
                              disabledDays={this.state.disabledDays}
                              artistId={this.state.artistId}/>
            <EditPackagesCard packages={this.state.packages}
                              sendPackageField={this.sendPackageField}
                              />
          </div>
          <input type="submit" value="Submit" />
        </form>
        ) : (
        <div className="profile">
        <Avatar name={this.state.fullName}
                avatar={this.state.avatarImage} />
        {this.props.currentUser ? (<MailButton email={this.state.email}
                    name={this.props.currentUserName} />) : ''}
        <StarPhotographer currentUser={this.props.currentUser}
                          artistId={id}
                          artistLiked={this.state.artistLiked} />
        <h3>Description</h3>
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
        <AvailabilityCard currentUser={this.props.currentUser}
                          disabledDays={this.state.disabledDays}
                          artistId={this.state.artistId} />
        <PackagesCard packages={this.state.packages} />
        <ReviewsCard reviews={this.state.reviews}
          currentUser={this.props.currentUser}
          artistId={this.state.artistId}
          deleteReview={this.deleteReview} />
        <AddReview currentUser={this.props.currentUser}
                   artistId={this.state.artistId}
                   createReview={this.createReview}/>
      </div>)}
    </div>
    )
  }
}

export default Profile;