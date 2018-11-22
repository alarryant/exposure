import React from 'react';

class EditPortfolio extends React.Component {

  displayPortfolio(images) {
    if (!images || images.length === 0 ) {
      return (<p> Sorry! No photos to display!</p>)
    } else {
      return images.map(function(image) {
        return (
        <div className="editPortfolio">
          { image.featured === 'true' ? 
          <img className="searchResult" style={{border: '3px solid lightgrey'}} alt="portfolioimg" src={image.src} /> 
          : 
          <img className="searchResult" alt="portfolioimg" src={image.src} />
          }
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