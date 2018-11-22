import React, { Component } from 'react';
import "react-tabs/style/react-tabs.css";
import axios from 'axios';
import OppCard from './components/OppCard.jsx';
import './styles/Opportunities.css';



class Opportunities extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opportunities: ''
    };

    this.displayEvents = this.displayEvents.bind(this);
    this.saveInterestedApplicates = this.saveInterestedApplicates.bind(this)
  }

  saveInterestedApplicates(event, artist) {
    let event_id = event
    let artist_id = artist
    console.log(event, artist)
    axios.post(`/opportunities/${event_id}/apply`, { event_id: event, artist_id: artist})
      .then((res) => {
        console.log(res)
      })
  }

  displayEvents(events) {
    if (!events || events.length === 0 ) {
      return (
        <p>There are currently no postings! Check back later!</p> )
    } else {
      return events.map((event) => {
        let date = event.event_date.toString().split('T')[0]
        return (
          <OppCard saveApplication={this.saveInterestedApplicates} event={event} date={date} usertype={this.props.usertype} currentUser={this.props.currentUser}/>
          )
      })
    }
  }

  componentDidMount() {
    axios.get("/api/opportunities").then(res => {
      this.setState({ 'opportunities': res.data })
    })
  }

  render() {
    return (
      <section className="opportunities">
        <h2>Opportunities</h2>
          { this.displayEvents(this.state.opportunities) }
      </section>
    );
  }
}

export default Opportunities;