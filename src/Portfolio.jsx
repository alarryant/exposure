import React, {Component} from 'react';


class Portfolio extends React.Component {

  displayPortofio(images) {
    if (!images || images.length === 0 ) {
      return (<p> Sorry! No photos display!</p>)
    } else {
      return images.map(function(image) {
        return <img className="searchResult" src={image.src} />
      })
    }
  }

  render() {
    console.log("In Portfolio")

  return (

  <div className="profile__portfolio">
    <section className="wrapper">
      <h1>Portfolio</h1>
      {this.displayPortofio(this.props.artistPhotos)}
    </section>
  </div>
  );
 };
};

export default Portfolio;