import React from 'react';
import Splashart from './Splashart.jpg';
import Carousel from 'react-bootstrap/lib/Carousel';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.categorizePhotos = this.categorizePhotos.bind(this);
    this.addCarouselPhotos = this.addCarouselPhotos.bind(this);
  }

  categorizePhotos(category, photos=[]) {
    let newArray = [];
    photos.forEach(function(photo) {
      if (photo.category.includes(category)) {
        while (newArray.length <= 6) {
          newArray.push(photo);
        }
      }
    });
    return newArray;
  }

  addCarouselPhotos(category, photos=[]) {
    let filteredPhotos = this.categorizePhotos(category, photos);

    return filteredPhotos.map(function(photo) {
      return (
        <Carousel.Item>
          <img alt="900x500" src={photo.src} />
        </Carousel.Item>
        )
    });
  }

  render() {

  return (

    <div>
      <div className="splashcontainer">
        <img className="splashart" alt="splash" src={Splashart} />
      </div>
      <h1>WEDDING</h1>
      <Carousel>
        {this.addCarouselPhotos("wedding", this.props.homephotos)}
      </Carousel>
      <h1>PORTRAIT</h1>
      <Carousel>
        {this.addCarouselPhotos("portrait", this.props.homephotos)}
      </Carousel>
      <h1>FAMILY</h1>
      <Carousel>
        {this.addCarouselPhotos("family", this.props.homephotos)}
      </Carousel>
      <h1>COMMERCIAL</h1>
      <Carousel>
        {this.addCarouselPhotos("commercial", this.props.homephotos)}
      </Carousel>
    </div>
  );
 }
}

export default Home;