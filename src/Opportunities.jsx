import React, { Component } from 'react';
import "react-tabs/style/react-tabs.css";
import axios from 'axios';
import OpportunityEventCard from './components/Opportunity_EventCard.jsx';
import AppliedCard from './Opportunities_Applied.jsx';
import './styles/Opportunities.css';
import CreateEvent from './CreateEvent';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import MyEvent from './components/Opportunity_MyEvents.jsx'

//MAIN OPPORTUNITIES BOARD

class Opportunities extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opportunities: '',
      applicationsent: false,
      appliedopportunities: []
    };

    this.displayEvents = this.displayEvents.bind(this);
    this.saveInterestedApplicants = this.saveInterestedApplicants.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.showSuccessMsg = this.showSuccessMsg.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.refreshApplybutton = this.refreshApplybutton.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  showSuccessMsg() {
    return (
      <div className="applicationSent">
        <h3>
          Your application has been sent! Thanks for applying!
        </h3>
      </div>
    )
  }

//CLIENT: DELETE EVENT IF YOU ARE THE CREATOR OF THE EVENT
  deleteEvent(event, creator) {
    let currentUser = parseInt(this.props.currentUser)

    if (creator === currentUser) {
      axios.post(`/opportunities/${event}/delete`, {
          event_id: event,
          creatorid: creator
        })
      .then((res) => {
        let newEvents = res.data;
        this.setState({ opportunities: newEvents });
      })
      axios.get(`/api/opportunities/applied/${this.props.currentUser}`)
        .then(res => {
          this.setState({'appliedopportunities': res.data })
        });
    }
  }

//PHOTOGRAPHER: SAVES THEIR APPLICATION
  saveInterestedApplicants(event, artist, desc) {
    this.setState({applicationsent: true});
    let event_id = event
    let description = desc
    let artist_name = this.props.currentUserName
    axios.post(`/opportunities/${event_id}/apply`,
      { event_id: event_id,
        artist_id: artist,
        msg_des: description,
        artist_name: artist_name})
      .then((data) => {
        axios.get(`/api/opportunities/applied/${this.props.currentUser}`)
        .then(res => {
          let appliedevent = res.data
          let applied_eventid = []

          appliedevent.forEach((i) => {
            applied_eventid.push(i.eventref_id)
          })

        this.setState({'appliedopportunities': applied_eventid })
      })
    })
  }

//PHOTOGRAPHER: IF DELETE APPLICATION, BUTTON REAPPEARS ON JOB BOARD
  refreshApplybutton() {
    axios.get(`/api/opportunities/applied/${this.props.currentUser}`)
        .then(res => {
          let appliedevent = res.data
          let applied_eventid = []

          appliedevent.forEach((i) => {
            applied_eventid.push(i.eventref_id)
          })
        this.setState({
          appliedopportunities: applied_eventid,
          applicationsent: false
        })
    })
  }

//DISPLAYS OPPORTUNITIES
  displayEvents(events) {
    if (!events || events.length === 0 ) {
      return (
        <div className="emptyevent">
        <h4>
          There are currently no postings!
        </h4>
        </div>
      )
    } else {
      return events.map((event) => {
        let date = event.event_date.toString().split('T')[0]
        if (!event.artist_accepted)
        return (
          <OpportunityEventCard
              appliedEvents={this.state.appliedopportunities}
              deleteEvent={this.deleteEvent}
              saveApplication={this.saveInterestedApplicants}
              event={event}
              date={date}
              usertype={this.props.usertype}
              currentUser={this.props.currentUser}/>
        )
      })
    }
  }

//CLIENT: CAN CREATE EVENTS
  createEvent(title, description, date, price, location) {
    axios.post("/opportunities/:id/add",
      { title: title,
        description: description,
        date: date,
        price: price,
        location: location,
        creator_id: this.props.currentUser
      })
      .then((res) => {
        let newEvents = res.data;
        this.setState({ opportunities: newEvents });
      });
  }

//REMOVES APPLICATION SUCCESS SIGN
  handleClick() {
    this.setState({applicationsent: false})
  }

//ON MOUNT FIND
  componentDidMount() {
    this.setState({applicationsent: false})
    axios.get("/api/opportunities")
      .then(res => {
        this.setState({ opportunities: res.data.reverse() })
    });

    axios.get(`/api/opportunities/applied/${this.props.currentUser}`)
      .then(res => {
        let appliedevent = res.data
        let applied_eventid = []
        appliedevent.forEach((i) => {
          applied_eventid.push(i.eventref_id)
        })
      this.setState({'appliedopportunities': applied_eventid })
    })
  }

  render() {
    let usertype = parseInt(this.props.usertype);
    return (

      <Tabs>
        <TabList>
          <Tab style={{fontSize: '16px'}} onClick={this.handleClick}> Job Board </Tab>
          {usertype === 1 ? <Tab style={{fontSize: '16px'}} onClick={this.handleClick}> Applied Opportunities </Tab> : <Tab style={{fontSize: '16px'}}>My Events</Tab>}
        </TabList>

        <TabPanel>
          <section className="opportunities">
          {this.state.applicationsent ? this.showSuccessMsg() : ""}
            <div className="oppHeader">
              <h2>Opportunities Board</h2>
              {usertype === 2 ?
                <CreateEvent createEvent={this.createEvent}/>
                : ""
              }
            </div>
              { this.displayEvents(this.state.opportunities) }
          </section>
        </TabPanel>

        <TabPanel>
          {usertype === 1 ?
            <AppliedCard
              currentUser={this.props.currentUser}
              usertype={this.props.usertype}
              refreshApplybutton={this.refreshApplybutton}
              />
          : <MyEvent
              createEvent={this.createEvent}
              displayEvents={this.displayEvents}
              currentUser={this.props.currentUser}
              usertype={this.props.usertype}
              />
          }
        </TabPanel>
      </Tabs>
    );
  }
}

export default Opportunities;