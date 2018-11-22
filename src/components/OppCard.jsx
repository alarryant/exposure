import React from 'react';

function OppCard(props) {

const { event } = props

  return (
    <div className="eventcard">
      <h3>{event.name}</h3>
      <p>Event Date: {props.date}</p>
      <hr/>
      <p>{event.description}</p>
      <p>Contact: {event.first_name} {event.last_name}</p>
    </div>
    )
}


export default OppCard;
