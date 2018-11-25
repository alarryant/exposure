import React, { Component } from 'react';
import OpportunityApply from './Opportunity_Apply.jsx';
import DeleteEvent from './Opportunity_Delete.jsx';
import OpportunityEventCard from './Opportunity_EventCard.jsx';
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

  }

  displayApplicants(applicants) {
    if (!applicants || applicants.length === 0 ) {
      return (
        <p>No one has applied to your events yet!</p> )
    } else {
      return applicants.map((applicant) => {
        console.log("applicant", applicant)
        let date = applicant.event_date.toString().split('T')[0]
        return (
          <MyApplicantCard
              key={applicant.application_id}
              applicant={applicant}
              date={date}
              currentUser={this.props.currentUser}
              />
        )
      })
    }
  }

  componentDidMount() {
    axios.get(`/api/opportunities/${this.props.currentUser}/applicants`)
      .then(res => {
        console.log(res)
        this.setState({ applicants: res.data })
      })
  }

render() {
  return (
    <div>
      {this.displayApplicants(this.state.applicants) }
    </div>
    )
  }
}


export default Applicants;
