import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './styles/SearchResults.css';
import { Modal/*, Button*/ } from 'react-bootstrap';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      imageOwner: null
    };

    this.displaySearchedImages = this.displaySearchedImages.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(id) {
    this.setState({ show: id });
  }

  displaySearchedImages(images) {
    let handleShowFunction = this.handleShow;
    let handleCloseFunction = this.handleClose;
    if (!images || images.length === 0 ) {
      return (<p> Sorry! Nothing matches this description!</p>)
    } else {
      return images.map((image) => {
        return (
          <div key={image.id}>
          <button className="indivImg"
                  value={image}
                  onClick={() => handleShowFunction(image.id)}>
            <img alt="900x500" src={image.src} className="searchResult"/>
          </button>
          <Modal show={this.state.show === image.id}
                 onHide={handleCloseFunction}>
            <Modal.Header closeButton>
            <Modal.Title>
              {image.title}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img className="indivImgLrg"
                   alt="900x500"
                   src={image.src} />
              <p>{image.description}</p>
            </Modal.Body>
            <Modal.Footer>
              { this.props.currentUser ? (
                <Link to={`/artists/${ image.image_owner }`}>
                  Photographer's Profile
                </Link>
              ) : (
              <p>
                Please login to view the artist's profile.
              </p>
              )}
            </Modal.Footer>
          </Modal>
        </div>
          /*<Link to={`/artists/${ image.image_owner }`}>
            <img className="searchResult"
                 alt={image.description}
                 src={image.src} />
          </Link>*/
        )
      })
    }
  }

  render() {
    return(
      <div>
        <section className="wrapper">
        <h2>
          Here's what we found on "{this.props.searchWord}"
        </h2>
        {this.displaySearchedImages(this.props.searchimages)}
        </section>
      </div>
    );
  }
}


export default SearchResults;
