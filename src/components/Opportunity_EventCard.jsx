import React from 'react';
import OpportunityApply from './Opportunity_Apply.jsx';
import DeleteEvent from './Opportunity_Delete.jsx';

//DISPLAY FOR AN EVENT

function OpportunityEventCard(props) {
  const { event } = props
  const user_type_id = parseInt(props.usertype);
  const creator_id = parseInt(event.creator_id);
  const currentUser = parseInt(props.currentUser);

  return (
    <div className="eventcard">
      <h3>{event.name}</h3>
      <p>Date: {props.date} -  Location: {event.event_location}</p>
      <hr/>
      <p>{event.description}</p>
      <p>Contact: {event.first_name} {event.last_name}</p>
      {user_type_id === 1 ? <OpportunityApply eventid={event.event_id} saveApplication={props.saveApplication} currentUser={props.currentUser} date={props.date} event={event}/>  : ""}
      {currentUser === creator_id ? <DeleteEvent eventid={event.event_id} deleteEvent={props.deleteEvent} currentUser={props.currentUser} date={props.date} event={event}/>  : ""}
    </div>
    )
}


export default OpportunityEventCard;
