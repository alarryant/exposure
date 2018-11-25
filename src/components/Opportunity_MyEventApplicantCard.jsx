import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


//DISPLAY FOR APPLICANTS

function MyApplicantCard(props) {

    const { applicant } = props

    // const user_type_id = parseInt(this.props.usertype);
    // const creator_id = parseInt(event.creator_id);
    // const currentUser = parseInt(this.props.currentUser);
    // const eventid = event.event_id
    // const appliedevent = this.props.appliedEvents

    return (
      <div className="eventcard">
        <h4> Your Event: { applicant.name } </h4>
        <p>Date: { props.date } -  Location: { applicant.event_location }</p>
         { applicant.artist_accepted === null
          ? <p>You have not hired anyone yet</p>
          : <p> You have selected a photographer </p>
        }
        <hr/>
        <p> Applicant Name: { applicant.first_name } { applicant.last_name } </p>
        <p> Applicant Contact: { applicant.email } </p>
        <NavLink to={`/artists/${applicant.artist_id}`}> {applicant.first_name}'s Profile </NavLink>
      </div>
  )
}


export default MyApplicantCard;

