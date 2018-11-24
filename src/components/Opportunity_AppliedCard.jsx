import React from 'react';
import DeleteApplication from './Opportunity_DeleteApplication.jsx';

//DISPLAY APPLIED EVENTS

function AppCard(props) {
  const { event } = props;
  // const user_type_id = parseInt(props.usertype)
  // const creator_id = parseInt(event.creator_id)
  // const currentUser = parseInt(props.currentUser)
  const application_id = event.application_id;

  return (
    <div className="eventcard">
      <h3>{event.name}</h3>
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
