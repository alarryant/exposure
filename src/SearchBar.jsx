import React, { Component } from 'react';
import CatDropDown from './components/CatDropDown.jsx'
import './styles/SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let search_item = this.state.value
    this.props.searchResult(search_item);
    this.setState({ value: "" });
  }

  render() {
    return (
      <div className="searchBar">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <label>
            <input className="searchInput"
              type="text"
              name="search"
              placeholder="What are you searching for?"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input className="searchButton" type="submit" value="Search" />
          <div className="catSearch dropdown-container">
          <div className="dropdown">
            <a href="#">Search By Category</a>
            <CatDropDown searchResult={this.props.searchResult} />
          </div>
        </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;