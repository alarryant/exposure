import React, { Component } from 'react';
import DeleteApplication from './DeleteApplication.jsx';
import AppCard from './AppCard.jsx';
import axios from 'axios';

class AppliedCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      appliedopportunities: [],
    };

    this.displayAppliedEvents = this.displayAppliedEvents.bind(this)
    this.deleteApplication = this.deleteApplication.bind(this)

  }

  deleteApplication(event, creator) {
    let currentUser = parseInt(this.props.currentUser)
    // if (creator === currentUser) {
    //   axios.post(`/opportunities/${event}/delete`, { event_id: event, creatorid: creator})
    //   .then((res) => {
    //     let newEvents = res.data;
    //     this.setState({opportunities: newEvents});
    //   })
    // });

    // }
  }

  displayAppliedEvents(events) {
    console.log(events)
    if (!events || events.length === 0 ) {
      return (
        <p>You haven't applied to anything! Why not checkout the opportunities board? </p> )
    } else {
      return events.map((event) => {
        let date = event.event_date.toString().split('T')[0]
        return (
          <AppCard deleteApplication={this.deleteApplication} event={event} date={date} usertype={this.props.usertype} currentUser={this.props.currentUser}/>
          )
      })
    }
  }

  componentDidMount() {
    axios.get(`/api/opportunities/applied/${this.props.currentUser}`).then(res => {
      this.setState({'appliedopportunities': res.data })
    });
  }

  render () {
    console.log("Applied", this.props)
    return (
      <section>
        <div className="oppHeader">
          <h2> Events You Applied To: </h2>
        </div>
        {this.displayAppliedEvents(this.state.appliedopportunities)}
      </section>
      )
    }
}


export default AppliedCard;
