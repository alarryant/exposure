import React, { Component } from 'react';
import "react-tabs/style/react-tabs.css";
import axios from 'axios';
import OppCard from './components/OppCard.jsx'
import CreateEvent from './CreateEvent';


class Opportunities extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opportunities: ''
    };

    this.displayEvents = this.displayEvents.bind(this);
    this.createEvent = this.createEvent.bind(this);
  }

  displayEvents(events) {
    if (!events || events.length === 0 ) {
      return (
        <p>There are currently no postings! Check back later!</p> )
    } else {
      return events.map(function(event) {
        let date = event.event_date.toString().split('T')[0]
        return (
          <OppCard event={ event } date={ date }/>
        )
      })
    }
  }

  createEvent(title, description, date, price, location) {
    axios.post("/opportunities/:id/add", { title: title, description: description, date: date, price: price, location: location })
      .then((res) => {
        let newEvents = res.data;
        this.setState({opportunities: newEvents});
        newEvents.map(function(event) {
          let date = event.event_date.toString().split('T')[0]
          return (
            <OppCard event={event} date={date}/>
            );
        });
      });
  }

  componentDidMount() {
    axios.get("/api/opportunities").then(res => {
      this.setState({'opportunities': res.data.reverse()})
    });
}

  render() {
    return (
      <section className="opportunities">
        <div className="oppHeader">
          <h2>Opportunities</h2>
          <CreateEvent createEvent={this.createEvent}/>
        </div>
          { this.displayEvents(this.state.opportunities) }
      </section>
    );
  }
}

export default Opportunities;