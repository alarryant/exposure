import React from 'react';

class Portfolio extends React.Component {

  displayPortfolio(images) {
    if (!images || images.length === 0 ) {
      return (<p> Sorry! No photos to display!</p>)
    } else {
      return images.map(function(image) {
        return <img className="searchResult" alt="portfolioimg" src={image.src} />
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

export default Portfolio;