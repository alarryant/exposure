import React, { Component } from 'react';
import ApplyEvent from './ApplyEvent.jsx'

function OppCard(props) {
const { event } = props
const user_type_id = parseInt(props.usertype)

  return (
    <div className="eventcard">
      <h3>{event.name}</h3>
      <p>Event Date: {props.date}</p>
      <hr/>
      <p>{event.description}</p>
      <p>Contact: {event.first_name} {event.last_name}</p>
      {user_type_id === 1 ? <ApplyEvent date={props.date} event={event.name}/>  : ""}
    </div>
    )
}


export default OppCard;
