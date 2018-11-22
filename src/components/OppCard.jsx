import React from 'react';
import ApplyEvent from './ApplyEvent.jsx'

function OppCard(props) {
  const { event } = props
  const user_type_id = parseInt(props.usertype)

  return (
    <div className="eventcard">
      <h3>{event.name}</h3>
      <p>Date: {props.date} -  Location: {event.event_location}</p>
      <hr/>
      <p>{event.description}</p>
      <p>Contact: {event.first_name} {event.last_name}</p>
      {user_type_id === 1 ? <ApplyEvent eventid={event.event_id} saveApplication={props.saveApplication} currentUser={props.currentUser} date={props.date} event={event}/>  : ""}
    </div>
    )
}


export default OppCard;
