import React from 'react';
import { NavLink } from 'react-router-dom';


//DISPLAY FOR APPLICANTS

function MyApplicantCard(props) {

    const { applicant } = props

    return (

      <tr>
        <td>{ applicant.name }</td>
        <td>{ props.date } </td>
        <td>{ applicant.artist_accepted === null ?  "No" : "Yes" }</td>
        <td>{ applicant.first_name } { applicant.last_name }</td>
        <td>{ applicant.email }</td>
        <td><NavLink to={`/artists/${applicant.artist_id}`}> {applicant.first_name}'s Profile </NavLink></td>
      </tr>

  )
}


export default MyApplicantCard;