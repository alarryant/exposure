import React from 'react';
import Splashart from './Splashart.jpg';
import sampleSize from 'lodash.samplesize';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import { Modal, Button } from 'react-bootstrap';


class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      imageOwner: null
    }

    this.categorizePhotos = this.categorizePhotos.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.addCarouselPhotos = this.addCarouselPhotos.bind(this);

  }

  categorizePhotos(category, photos=[]) {
    let photoCollection = photos.filter(photo => photo.category.includes(category));
    return sampleSize(photoCollection, [10]);
  }

  handleClose() {
    this.setState({ show: false });
    }

  handleShow(id) {
    // event.preventDefault();
    this.setState({ show: id });
  }

  addCarouselPhotos(category, photos=[]) {
    let filteredPhotos = this.categorizePhotos(category, photos);
    let handleShowFunction = this.handleShow
    let handleCloseFunction = this.handleClose

    return filteredPhotos.map((photo) => {
      return (
        <div className="sliderImg" >
          <button className="indivImg" value={photo} onClick={() => handleShowFunction(photo.id)}><img alt="900x500" src={photo.src} /></button>
          <Modal show={this.state.show === photo.id} onHide={handleCloseFunction}>
            <Modal.Header closeButton>
            <Modal.Title>{photo.title}</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                  <img className="indivImgLrg" alt="900x500" src={photo.src} />
                  <p>{photo.description}</p>
                </Modal.Body>
                <Modal.Footer>
                <Link to={`/artists/${ photo.image_owner }`}>{ photo.image_owner }</Link>
                </Modal.Footer>
          </Modal>
        </div>
        )
    });
  }

  render() {
    const settings = {
      className: "slider variable-width",
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      rows: 1,
      autoplay: true,
      focusOnSelect: true,
    };

  return (

    <div className="homeContainer">
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