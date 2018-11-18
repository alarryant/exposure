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

  render() {
    console.log("Search results: ", this.props)
    return(
      <div>
      <p>
      Results for: {this.state.displayWord}
      This is where grid of pictures go
      </p>
      </div>
    );
  }
}


export default SearchResults;
