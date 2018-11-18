import React, {Component} from 'react';
import { Redirect } from "react-router-dom"

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log("event", event.target.value);
  }

  setRedirect = () => {
    this.setState({
      redirect: false
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    let search_item = this.state.value
    this.props.searchResult(search_item);
    this.setState({
      value: '',
      redirect: true
    })
    this.renderRedirect()
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/search' />
      this.setRedirect();
    }
  }

  /*

  Background:
  Tried to set redirect true/false. If true, redirect and then set state back to false again

  QUESTION:
  1) Redirect to "/search?word=queryword" on submit
  2) QueryWord will be accepted into Search Result component
  */

  render() {
    return(
      <div>
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
      {this.renderRedirect()}
      </div>
    );
  }
}


export default SearchBar;