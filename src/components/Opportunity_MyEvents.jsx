import React, { Component } from 'react';
import OpportunityApply from './Opportunity_Apply.jsx';
import DeleteEvent from './Opportunity_Delete.jsx';
import OpportunityEventCard from './Opportunity_EventCard.jsx';
import axios from 'axios'

//DISPLAY FOR USER'S CREATED EVENT

class MyEvent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      myevents: []
    }

  }

  componentDidMount() {
    axios.get(`/api/opportunities/${this.props.currentUser}`)
      .then(res => {
        this.setState({ myevents: res.data.reverse() })
    });
  }

  componentDidUpdate() {
    axios.get(`/api/opportunities/${this.props.currentUser}`)
      .then(res => {
        this.setState({ myevents: res.data.reverse() })
    });
  }

render() {
  return (
    <div>
      {this.props.displayEvents(this.state.myevents) }
    </div>
    )
  }
}


export default MyEvent;
