import React from 'react';
import Splashart from './Splashart.jpg';
// import Carousel from 'react-bootstrap/lib/Carousel';
import sampleSize from 'lodash.samplesize';
import Slider from "react-slick";


class Home extends React.Component {

  constructor(props) {
    super(props);

    this.categorizePhotos = this.categorizePhotos.bind(this);
    this.addCarouselPhotos = this.addCarouselPhotos.bind(this);
  }

  categorizePhotos(category, photos=[]) {
    let photoCollection = photos.filter(photo => photo.category.includes(category));
    return sampleSize(photoCollection, [10]);
  }

  addCarouselPhotos(category, photos=[]) {
    let filteredPhotos = this.categorizePhotos(category, photos);

    return filteredPhotos.map(function(photo) {
      return (
        <div className="sliderImg" >
          <img alt="900x500" src={photo.src} />
        </div>
        )
    });
  }



  render() {
    const settings = {
      className: "slider variable-width",
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      rows: 1
    };

  return (

    <div>
      <div className="splashcontainer">
        <img className="splashart" alt="splash" src={Splashart} />
      </div>
      <h1>WEDDING</h1>
      <Slider {...settings}>
        {this.addCarouselPhotos("wedding", this.props.homephotos)}
      </Slider>
      <h1>PORTRAIT</h1>
      <Slider {...settings}>
        {this.addCarouselPhotos("portrait", this.props.homephotos)}
      </Slider>
      <h1>FAMILY</h1>
      <Slider {...settings}>
        {this.addCarouselPhotos("family", this.props.homephotos)}
      </Slider>
      <h1>COMMERCIAL</h1>
      <Slider {...settings}>
        {this.addCarouselPhotos("commercial", this.props.homephotos)}
      </Slider>
    </div>
  );
 }
}

export default Home;