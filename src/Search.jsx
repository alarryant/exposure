import React, {Component} from 'react';

class Search extends Component {
  constructor() {
    super()
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault();
    let search_item = event.target
    alert('A search was submitted: ' + this.state.value);
    this.props.searchResult(search_item.value)
    search_item.value = '';
    //should send to GET /SEARCH?
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
       <label>
        Search:
        <input
          type="text"
          name="search"
          placeholder="What are you looking for?"
          value={ this.state.value }
          onChange={this.handleChange}
        />
        </label>
      <input type="submit" value="Submit"/>
      </form>
    );
  }
}


export default Search;
