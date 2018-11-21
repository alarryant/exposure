import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import axios from 'axios';


class Opportunities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opportunities: ''
    }

    this.displayEvents = this.displayEvents.bind(this)
  }

  displayEvents(events) {
    console.log("displayedEvents", events)
    if (!events || events.length === 0 ) {
      return (<p> There are currently no postings! Check back later! </p>)
    } else {
      return events.map(function(event) {
        return (
          <p> testing </p>
        )
      })
    }
  }


  componentDidMount() {
    axios.get("/api/opportunities").then(res => {
      console.log("Opportunities: ", res.data);
      this.setState({'opportunities': res.data})
    })
}

  render() {
    return (
      <div>
        <h2>Opportunities</h2>
          { this.displayEvents(this.state.opportunities) }

      </div>
    );
  }
}

export default Opportunities;