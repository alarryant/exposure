import React, { Component } from 'react';
import MyApplicantCard from './Opportunity_MyEventApplicantCard.jsx';
import axios from 'axios'


//DISPLAY FOR USER'S CREATED EVENT

class Applicants extends Component {
  constructor(props) {
    super(props)

    this.state = {
      applicants: []
    }

    this.displayApplicants = this.displayApplicants.bind(this)
    this.acceptApplicant = this.acceptApplicant.bind(this)
  }

  acceptApplicant(artistid, eventid){
   axios.post(`/opportunities/${eventid}/accept`,
        { event_id: eventid,
          artistid: artistid,
          currentUser: this.props.currentUser })
      .then((res) => {
        this.setState({ applicants: res.data })
      })
      this.props.refresh()

  }

  displayApplicants(applicants) {
    if (!applicants || applicants.length === 0 ) {
      return (
         <td colspan="4"> No one has applied to your events yet!</td> )
    } else {
      return applicants.map((applicant) => {
        let date = applicant.event_date.toString().split('T')[0]
        return (
          <MyApplicantCard
              key={applicant.application_id}
              applicant={applicant}
              date={date}
              currentUser={this.props.currentUser}
              acceptApplicant={this.acceptApplicant}
              />
        )
      })
    }
  }

  componentDidMount() {
    axios.get(`/api/opportunities/${this.props.currentUser}/applicants`)
      .then(res => {
        this.setState({ applicants: res.data })
      })
  }

render() {
  return (
    <div>
      <h2> List of Applicants </h2>
      <p> Total number of applications to review: {this.state.applicants.length} </p>
     <table>
     <tbody>
      <tr>
        <th scope="col">Your Event</th>
        <th scope="col">Event Date</th>
        <th scope="col">Filled?</th>
        <th scope="col">Applicant </th>
        <th scope="col">Applicant's Email </th>
        <th scope="col">Applicant's Profile</th>
        <th scope="col">Accept</th>
      </tr>
      {this.displayApplicants(this.state.applicants) }
      </tbody>
      </table>
    </div>
    )
  }
}


export default Applicants;
