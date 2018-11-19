import React, {Component} from 'react';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.displaySearchedImages = this.displaySearchedImages.bind(this);
  }

  displaySearchedImages(images) {
    console.log("displayedSearch", images)
    if (!images || images.length === 0 ) {
      return (<p> Sorry! Nothing matches this description!</p>)
    } else {
      return images.map(function(image) {
        return <img alt="900x500" src={image.src} />
      })
    }
  }

  render() {

    return(
      <div>
        <p>
        Here's what we found on "{this.props.searchWord}"
        </p>
        <section>
        {this.displaySearchedImages(this.props.searchimages)}
        </section>
      </div>
    );
  }
}


export default SearchResults;
