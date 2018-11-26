import React, { Component } from 'react';
import OpportunityApply from './Opportunity_Apply.jsx';
import DeleteEvent from './Opportunity_Delete.jsx';

//DISPLAY FOR AN EVENT

class OpportunityEventCard extends Component {
    constructor(props) {
    super(props);

    this.haveApplied = this.haveApplied.bind(this)
  }

  haveApplied(id) {
    if ((this.props.appliedEvents).includes(id)) {
      return ""
    } else {
      return (
         <OpportunityApply
          eventid={this.props.event.event_id}
          saveApplication={this.props.saveApplication}
          currentUser={this.props.currentUser}
          date={this.props.date}
          event={this.props.event}
        />)
    }
  }

  render () {
    const { event } = this.props
    const user_type_id = parseInt(this.props.usertype);
    const creator_id = parseInt(event.creator_id);
    const currentUser = parseInt(this.props.currentUser);
    const eventid = event.event_id

    return (
      <div className="eventcard">
        <h3>{ event.name }</h3>
        <p>Date: { this.props.date } -  Location: { event.event_location }</p>
        <p>Budget: ${ event.price }</p>
        <hr/>
        <p>{ event.description }</p>
        <p>Contact: { event.first_name } { event.last_name }</p>

        { user_type_id === 1 ? this.haveApplied(eventid) : "" }
        { currentUser === creator_id ?
          <DeleteEvent
            eventid={event.event_id}
            deleteEvent={this.props.deleteEvent}
            currentUser={this.props.currentUser}
            date={this.props.date}
            event={event}
            />
          : ""
          }
      </div>
  )}
}


export default OpportunityEventCard;
