import React from 'react';
// import axios from 'axios';

class EditPortfolio extends React.Component {

  constructor(props){
    super(props);

    this.onFeatureClick = this.onFeatureClick.bind(this);
  }

  onFeatureClick(event) {
    event.preventDefault();
    let clickedPhoto = event.currentTarget;
    let clickedPhotoSrc = clickedPhoto.src;
    let clickedPhotoFeature = clickedPhoto.getAttribute("value");
    this.props.changeFeaturePhotos(clickedPhotoSrc, clickedPhotoFeature);
}


  displayPortfolio(images) {
    if (!images || images.length === 0 ) {
      return (
        <p>
          Sorry! No photos to display!
        </p>
      )
    } else {
      return images.map((image) => {
        return (
          <div className="editPortfolio">
          { image.featured === 'true' ?
            <img className="searchResult"
               style={{border: '3px solid lightgrey'}}
               alt="portfolioimg"
               src={image.src}
               onClick={this.onFeatureClick}
               value={image.featured}/>
          :
            <img className="searchResult"
                 alt="portfolioimg"
                 src={image.src}
                 onClick={this.onFeatureClick}
                 value={image.featured}/> }
          </div>
        )
      })
    }
  }

  render() {
    return (
    <div className="profile__portfolio">
      <section className="wrapper">
        {this.displayPortfolio(this.props.artistPhotos)}
      </section>
    </div>
    );
   };
};

export default EditPortfolio;