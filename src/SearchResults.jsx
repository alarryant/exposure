import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.displaySearchedImages = this.displaySearchedImages.bind(this);
  }

  displaySearchedImages(images) {
    if (!images || images.length === 0 ) {
      return (<p> Sorry! Nothing matches this description!</p>)
    } else {
      return images.map(function(image) {
        return (
          <Link to={`/artists/${ image.image_owner }`}>
            <img className="searchResult" alt={image.description} src={image.src} />
          </Link>
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
