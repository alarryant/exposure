import React from 'react';
import DeleteApplication from './Opportunity_DeleteApplication.jsx';

//DISPLAY APPLIED EVENTS

function AppCard(props) {
  const { event } = props;
  const application_id = event.application_id;

  console.log("APPCARD", props)

  return (
    <div className="eventcard">
      { props.event.artist_accepted === props.event.artist_id ? <h3 className="notification"> You've been hired! </h3> : ""}
      <h2>{event.name}</h2>
      <p>Date: {props.date} -  Location: {event.event_location}</p>


      <hr/>
      <p>{event.description}</p>
      <p>Contact: {event.first_name} {event.last_name}</p>
      <DeleteApplication
        application_id={application_id}
        deleteApplication={props.deleteApplication}
        eventid={event.event_id}
        deleteEvent={props.deleteEvent}
        currentUser={props.currentUser}
        date={props.date}
        event={event}
        />
    </div>
    )
}

export default AppCard;
