import React, { Component } from 'react';
import ApplyEvent from './ApplyEvent.jsx';
import DeleteEvent from './DeleteEvent.jsx';
import OppCard from './OppCard.jsx';
import axios from 'axios';

class AppliedCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      appliedopportunities: '',
    };
  }

  displayAppliedEvents(events) {
    if (!events || events.length === 0 ) {
      return (
        <p>You haven't applied to anything! Why not checkout the opportunities board? </p> )
    } else {
      return events.map((event) => {
        let date = event.event_date.toString().split('T')[0]
        return (
          <OppCard deleteEvent={this.deleteEvent} saveApplication={this.saveInterestedApplicates} event={event} date={date} usertype={this.props.usertype} currentUser={this.props.currentUser}/>
          )
      })
    }
  }

  componentDidMount() {
    axios.get(`/api/opportunities/applied/${this.props.currentUser}`).then(res => {
      this.setState({'appliedopportunities': res.data })
    });
  }

  render () {
    return (
      <section>
        <div className="oppHeader">
          <h2> Events You Applied To: </h2>
        </div>
        <div className="eventcard">
            testing
        </div>
      </section>
      )
    }
}


export default AppliedCard;
