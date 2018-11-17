import React, {Component} from 'react';

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log("event", event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault();
    let search_item = this.state.value
    this.props.searchResult(search_item);
    this.setState({value: ''})
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


export default SearchBar;