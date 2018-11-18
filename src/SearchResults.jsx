import React, {Component} from 'react';

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <p>
        RESULTS: Images for "{this.props.searchWord}"
        </p>
        <section>
        This is where grid conponent of pictures go
        </section>
      </div>
    );
  }
}


export default SearchResults;
