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

      <tr>
        <td scope="col">{ applicant.name }</td>
        <td scope="col">{ props.date } </td>
        <td scope="col">{ applicant.artist_accepted === null
          ? <p> No</p>
          : <p> Yes </p>
        }</td>
        <td scope="col">{ applicant.first_name } { applicant.last_name }</td>
        <td scope="col">{ applicant.email }</td>
        <td scope="col"><NavLink to={`/artists/${applicant.artist_id}`}> {applicant.first_name}'s Profile </NavLink></td>
      </tr>

  )
}


export default MyApplicantCard;