import React, {Component} from 'react';
import queryString from 'query-string'

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state ={
      displayWord: ""
    }

    this.getQueryWord = this.getQueryWord.bind(this);
  }

  getQueryWord() {
    console.log("this props location search: ", this.props.location.search)
    const values = queryString.parse(this.props.location.search)
    console.log("values", values.word)
    this.setState({displayWord: values.word})
  }

  componentDidMount() {
    this.getQueryWord()
  }


//http://localhost:3000/search?word=wedding : "Results for "Wedding"
  render() {
    console.log("Search results: ", this.props)
    return(
      <div>
        <p>
        RESULTS: Images for "{this.state.displayWord}"
        </p>
        <section>
        This is where grid conponent of pictures go
        </section>
      </div>
    );
  }
}


export default SearchResults;
