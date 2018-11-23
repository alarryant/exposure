import React, { Component } from 'react';
import "react-tabs/style/react-tabs.css";
import axios from 'axios';
import OppCard from './components/OppCard.jsx';
import AppliedCard from './components/AppliedCard.jsx';
import './styles/Opportunities.css';
import CreateEvent from './CreateEvent';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


class Opportunities extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opportunities: '',
      applicationsent: false,
    };

    this.displayEvents = this.displayEvents.bind(this);
    this.saveInterestedApplicates = this.saveInterestedApplicates.bind(this)
    this.createEvent = this.createEvent.bind(this);
    this.showSuccessMsg = this.showSuccessMsg.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);

  }

  showSuccessMsg() {
      return (
      <div className="applicationSent">
        <h3>Your application has been sent! Thanks for applying!</h3>
      </div>

      )
  }

  deleteEvent(event, creator) {
    let currentUser = parseInt(this.props.currentUser)
    if (creator === currentUser) {
      axios.post(`/opportunities/${event}/delete`, { event_id: event, creatorid: creator})
      .then((res) => {
        let newEvents = res.data;
        this.setState({opportunities: newEvents});
      })

      axios.get(`/api/opportunities/applied/${this.props.currentUser}`).then(res => {
        this.setState({'appliedopportunities': res.data })
    });

    }
  }

  saveInterestedApplicates(event, artist, desc) {
    this.setState({applicationsent: true});
    console.log("savedInter function")
    let event_id = event
    let description = desc
    let artist_name = this.props.currentUserName
    axios.post(`/opportunities/${event_id}/apply`, { event_id: event_id, artist_id: artist, msg_des: description, artist_name: artist_name})
      .then((res) => {
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
          <OppCard deleteEvent={this.deleteEvent} saveApplication={this.saveInterestedApplicates} event={event} date={date} usertype={this.props.usertype} currentUser={this.props.currentUser}/>
          )
      })
    }
  }

  createEvent(title, description, date, price, location) {
    axios.post("/opportunities/:id/add", { title: title, description: description, date: date, price: price, location: location })
      .then((res) => {
        let newEvents = res.data;
        this.setState({opportunities: newEvents});
        });
  }

  componentDidMount() {
    this.setState({applicationsent: false})

    axios.get("/api/opportunities").then(res => {
      this.setState({'opportunities': res.data.reverse()})
    });
  }

  render() {
    let usertype = parseInt(this.props.usertype)
    return (
      <Tabs>
        <TabList>
          <Tab> Job Board </Tab>
          {usertype === 2 ? <CreateEvent createEvent={this.createEvent}/> : <Tab> Applied Opportunities </Tab> }
        </TabList>

        <TabPanel>
          <section className="opportunities">
          {this.state.applicationsent ? this.showSuccessMsg() : ""}
            <div className="oppHeader">
              <h2>Opportunities Board</h2>
              {usertype === 2 ? <CreateEvent createEvent={this.createEvent}/>  : ""}
            </div>
              { this.displayEvents(this.state.opportunities) }
          </section>
        </TabPanel>

        <TabPanel>
          <AppliedCard currentUser={this.props.currentUser} usertype={this.props.usertype}/>
        </TabPanel>
      </Tabs>

    );
  }
}

export default Opportunities;