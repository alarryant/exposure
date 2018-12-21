import React from 'react';
import Portfolio from './components/Portfolio';
import EditPortfolio from './components/Profile_Portfolio_Edit';
import Avatar from './components/Avatar.jsx';
import Slider from "react-slick";
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
import OpportunitiesApplied from './Opportunities_Applied';
import Statistics from './components/Statistics';
import './styles/Profile.css';
import './styles/SearchResults.css';

function MailButton(props) {
  return (
    <button className="contactMe">
      <a href={`mailto:${props.email}?subject=${props.name} would like to book you for a photoshoot.`}>
        Contact Me
      </a>
    </button>
  )
}

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      artist: {},
      photoView: 'featured',
      editable: false,
      uploadStatus: false,
      errorMsg: false,
      featuredError: false
    }

    this.addCarouselPhotos = this.addCarouselPhotos.bind(this);
    this.areFeaturedPhotos = this.areFeaturedPhotos.bind(this);
    this.changeShowState = this.changeShowState.bind(this);
    this.renderTabsContent = this.renderTabsContent.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendSocialMediaForm = this.sendSocialMediaForm.bind(this);
    this.sendBioForm = this.sendBioForm.bind(this);
    this.sendPackageField = this.sendPackageField.bind(this);
    this.changeFeaturePhotos = this.changeFeaturePhotos.bind(this);
    this.createReview = this.createReview.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleFormInput = this.handleFormInput.bind(this);
    this.refreshApplybutton = this.refreshApplybutton.bind(this);
  }

  areFeaturedPhotos(photos = []) {
    // TypeError: photos.filter is not a function
    return photos.filter(photo => photo.featured.includes("true"));
  }

  addCarouselPhotos(photos = []) {
    let filteredPhotos = this.areFeaturedPhotos(photos);

    return filteredPhotos.map(function (photo) {
      return (
        <div className="sliderImg" key={photo.id}>
          <img alt="900x500" src={photo.src} />
        </div>
      )
    });
  }

// MANAGES SETTING STATE OF TAB TITLES:  PORTFOLIO, FEATURED PHOTOS, APPLIED EVENTS, STATISTICS
  changeShowState(event){
    if (event.target.innerHTML === 'Featured Photos') {
      this.setState({ photoView: "featured" })
    } else if (event.target.innerHTML === 'Portfolio') {
      this.setState({ photoView: "portfolio" })
    } else if (event.target.innerHTML === 'Applied Events') {
      this.setState({ photoView: "events" })
    } else {
      this.setState({ photoView: "statistics" })
    }
  }


// MANAGES DELETED APPLICATIONS TO EVENTS
  refreshApplybutton() {
    axios.get(`/api/opportunities/applied/${this.props.currentUser}`)
        .then(res => {
          let appliedevent = res.data
          let applied_eventid = []

          appliedevent.forEach((i) => {
            applied_eventid.push(i.eventref_id)
          })
      this.setState({
        appliedopportunities: applied_eventid,
        applicationsent: false
      })
    })
  }

// MANAGES RENDER OF TABBED CONTENTS: PORTFOLIO, FEATURED PHOTOS, APPLIED EVENTS, STATISTICS
  renderTabsContent(state) {
    const settings = {
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      rows: 1,
      autoplay: true,
      focusOnSelect: true,
    };

    if (state === "portfolio") {
      return(
        <div className="portfolioContainer">
          <h1>PORTFOLIO</h1>
          <hr/>
          <Portfolio artistPhotos={this.state.collection} />
        </div>
      )
    } else if (state === "featured") {
      return(
        <div className="featuredContainer">
          <h1>FEATURED</h1>
          <hr/>
          {this.numOfFeatured !== 0 ? <Slider {...settings}>
            {this.addCarouselPhotos(this.state.collection)}
          </Slider> : <p>This artist has no featured photos.</p>}

        </div>
      )
    } else if (state === 'events') {
      return (
        <div className="eventsContainer">
          <h1>APPLIED EVENTS</h1>
          <hr/>
          <OpportunitiesApplied refreshApplybutton={this.refreshApplybutton}usertype={this.props.usertype} currentUser={this.props.currentUser}/>
        </div>
      )
    } else {
      return (
        <div className="statisticsContainer">
          <h1>STATISTICS</h1>
          <hr/>
          <Statistics />
        </div>
      )
    }
  }

  sendSocialMediaForm = (socialmedia) => {
    if (!socialmedia.twitter) {
      socialmedia.twitter = 'null'
    } else if (!socialmedia.facebook) {
      socialmedia.facebook = 'null'
    } else if (!socialmedia.instagram) {
      socialmedia.instagram = 'null'
    } else if (!socialmedia.website) {
      socialmedia.website = 'null'
    }

    this.setState({
      twitter: socialmedia.twitter,
      facebook: socialmedia.facebook,
      instagram: socialmedia.instagram,
      website: socialmedia.website
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

      axios.post("/api/artists/:id/editfeatured",
        {
          currentUser: this.props.currentUser,
          clickedPhotoSrc: clickedPhotoSrc,
          clickedPhotoFeature: clickedPhotoFeature
        })
        .then(res => {
          let newCollection = res.data.images;
          this.setState({ collection: newCollection });
        })
    }

  createReview(rating, review, artist, user) {
    axios.post("/api/artists/:id/newreview",
      {
        rating: rating,
        description: review,
        artist_id: artist,
        user_id: user
      })
      .then((res) => {
        let newReviews = res.data.reverse();
        this.setState({ reviews: newReviews });
      });
  }

  deleteReview(review) {
    let artist_id = review.artist_id;
    let review_id = review.review_id;

    axios.post(`/api/artists/${artist_id}/reviews/${review_id}`, { review_id, artist_id })
      .then((res) => {
        let newReviews = res.data.reverse();
        this.setState({ reviews: newReviews });
      })
  }

  componentDidMount() {

    if (this.props.location.pathname.includes("/editprofile") && Number(this.props.currentUser) === Number(this.props.match.params.id)) {
      this.setState({editable: true});
    }

    const { id } = this.props.match.params;

    this.setState({ artistId: id });

    axios.get(`/api/artists/${id}`, {
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
          website: res.data.user[0].website_url,
          reviews: res.data.reviews,
          email: res.data.user[0].email,
          redirect: true
        };
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
    if (this.state.packages.length < 3) {
      event.preventDefault();
      this.setState({errorMsg: true})
    } else {
      this.props.handleProfileEditPath(`artists/${this.props.currentUser}`);
      let submitData = {
        packages: this.state.packages,
        twitter: this.state.twitter,
        facebook: this.state.facebook,
        instagram: this.state.instagram,
        website: this.state.website,
        bio: this.state.bio,
        errorMsg: false
      }

      axios.post(`/api/artists/${this.state.artistId}/edit`,
        {
          artistId: this.state.artistId,
          submitData: submitData
        })
        .then((res) => {
          this.setState({
            packages: res.data.packages,
            twitter: res.data[0].twitter_url,
            facebook: res.data[0].facebook_url,
            instagram: res.data[0].instagram_url,
            website: res.data[0].website_url,
            bio: res.data[0].bio
          })
        })
        .catch((err) => console.log(err))
    }
  }

  handleUpload = (event) => {
     event.preventDefault();
      const { selectedFile } = this.state;
      let formData = new FormData();

      formData.append('image_owner', this.state.artistId);
      formData.append('description', this.state.description);
      formData.append('category', this.state.category);
      formData.append('title', this.state.title);
      formData.append('selectedFile', selectedFile);

      this.setState({
        image_owner: '',
        title: '',
        description: '',
        category: ''});

      axios.post('/api/upload', formData)
        .then((result) => {
          this.setState({collection: result.data.images});
        })
        .catch(function (response) {
        console.log(response);
    });
  }

  handleFormInput = (event) => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  }

  handleFileSelect = (event) => {
   switch (event.target.name) {
      case 'selectedFile':
        this.setState({ selectedFile: event.target.files[0] });
        break;
      default:
        this.setState({ [event.target.name]: event.target.value });
    }
  }

  render() {
    const { id } = this.props.match.params;

    this.numOfFeatured = this.areFeaturedPhotos(this.state.collection);

    return (
      <div className="contentWrapper">
      {this.state.editable ? (
        <form onSubmit={this.handleSubmit}>
          <div className="profile">
            <div className="avatarSocMedEdit">
              <Avatar name={this.state.fullName}
                    avatar={this.state.avatarImage} />
              <EditSocialMedia twitter={this.state.twitter}
                               facebook={this.state.facebook}
                               instagram={this.state.instagram}
                               website={this.state.website}
                               sendSocialMediaForm={this.sendSocialMediaForm} />
              {this.props.currentUser === id ? (
                <button className="editButton" onClick={this.handleClickEdit}>
                  {this.state.editable ? "Return" : "Edit"}
                </button>
              ) : (
                ''
              )}
              <input className="submitButton" type="submit" value="Submit" />
            </div>
            <div className="personalDetContainer">
              <h3>ABOUT</h3>
              <hr/>
              <EditProfileDesc bio={this.state.bio}
                               sendBioForm={this.sendBioForm} />

              </div>
              <div className="outerUploadContainer">
              <h1>Add Portfolio Images</h1>
              <hr/>
              <div className="uploadContainer">
                <form method="post" enctype="multipart/form-data" action="/upload" onSubmit={this.handleUpload}>
                  <input type="number"
                         name="image_owner"
                         value={this.state.artistId}
                         className="hidden"/>
                  <label>Title</label>
                  <input type="text"
                         name="title"
                         placeholder="Add a title for your image"
                         value={this.state.title}
                         onChange={this.handleFormInput}/><br/>
                  <div className="descInput">
                  <label className="descLabel">Description</label>
                  <textarea name="description"
                            placeholder="Add a description for your image"
                            onChange={this.handleFormInput}
                            value={this.state.description}/><br/>
                  </div>
                  <label>Category</label>
                  <input type="text"
                         name="category"
                         placeholder="Add applicable categories for your image"
                         onChange={this.handleFormInput}
                         value={this.state.category}/><br/>
                  <input id="file" type="file" accept="image/*" name="selectedFile" onChange={this.handleFileSelect}/>
                  <input id="upload" type="submit" value="Upload"/>
                </form>
                </div>
                </div>
                <div className="featuredPortfolio">
                <h1>Select Feature Photos ({this.numOfFeatured.length}/10):</h1>
                <hr/>
                  <div>
                    <EditPortfolio
                      changeFeaturePhotos={this.changeFeaturePhotos}
                      artistPhotos={this.state.collection} />
                  </div>
              </div>
              <div className="dropDownMenu">
              <AvailabilityCard currentUser={this.props.currentUser}
                disabledDays={this.state.disabledDays}
                artistId={this.state.artistId}
                editable={this.state.editable} />
              <EditPackagesCard packages={this.state.packages}
                sendPackageField={this.sendPackageField}
              /></div>
            </div>
            {this.state.errorMsg ? <p className="packageError">Sorry, please enter details for 3 packages!</p> : ''}
          </form>
        ) : (
          <div className="profile">
            <div className="avatarSocMed" >
              <Avatar name={this.state.fullName}
                avatar={this.state.avatarImage} />
                {this.props.currentUser === id ? null :
                <span className="likeContact">
                  <MailButton email={this.state.email}
                  name={this.props.currentUserName} />
                  <StarPhotographer currentUser={this.props.currentUser}
                          artistId={id}
                          artistLiked={this.state.artistLiked} />
                </span>}
              <SocialMedia twitter={this.state.twitter}
                           facebook={this.state.facebook}
                           instagram={this.state.instagram}
                           website={this.state.website} />
                {this.props.currentUser === id ? (
                <button className="editButton" onClick={this.handleClickEdit}>
                  {this.state.editable ? "Return" : "Edit"}
                </button>
              ) : (
                ''
              )}
            </div>
          <div className="personalDetContainer">
            <h3>ABOUT</h3>
            <hr/>
            <ProfileDesc bio={this.state.bio} />
          </div>
          {/* need to add highlighted button when on that photoview*/}
          <div className="featuredPortfolio">
            <button className="toggleOn" onClick={this.changeShowState}>
              Featured Photos
            </button>
            <button className="toggleOn" onClick={this.changeShowState}>
              Portfolio
            </button>
            {this.state.artistId === this.props.currentUser ? <span><button className="toggleOn" onClick={this.changeShowState}>
              Applied Events
            </button>
            <button className="toggleOn" onClick={this.changeShowState}>
              Statistics
            </button></span> : ''}
            <hr/>
            {this.renderTabsContent(this.state.photoView)}
          </div>
          <div className="dropDownMenu">
            <AvailabilityCard currentUser={this.props.currentUser}
                              disabledDays={this.state.disabledDays}
                              artistId={this.state.artistId} />
            <PackagesCard packages={this.state.packages} />
            <ReviewsCard reviews={this.state.reviews}
                         currentUser={this.props.currentUser}
                         artistId={this.state.artistId}
                         deleteReview={this.deleteReview} />
            {(this.props.currentUser !== this.state.artistId) && (this.props.usertype === 2) ? (
          <AddReview currentUser={this.props.currentUser}
                         artistId={this.state.artistId}
                         createReview={this.createReview} />) : ''}
          </div>
        </div>)}
      </div>
    )
  }
}

export default Profile;