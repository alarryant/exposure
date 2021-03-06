import React, { Component } from 'react';
import axios from 'axios'

//DISPLAY FOR USER'S CREATED EVENT

class MyEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myevents: []
    };
  }

  componentDidMount() {
    axios.get(`/api/opportunities/${this.props.currentUser}`)
      .then(res => {
        this.setState({ myevents: res.data.reverse() });
    });
  }

  componentDidUpdate() {
    axios.get(`/api/opportunities/${this.props.currentUser}`)
      .then(res => {
        this.setState({ myevents: res.data.reverse() });
    });
  }

render() {
  return (
    <div>
      <section className="opportunities">
        <div className="oppHeader">
          <h2>MY EVENTS </h2>
        </div>
        {this.props.displayEvents(this.state.myevents) }
      </section>
    </div>
    )}
}


export default MyEvent;
