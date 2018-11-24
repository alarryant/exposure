import React from 'react';
import Avatar from './components/Avatar.jsx';
// import EditAvailability from './components/Availability.jsx';
// import Statistics from './components/Statistics.jsx';
import CreateEvent from './CreateEvent';
import OpportunityEventCard from './components/Opportunity_EventCard.jsx'
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles/Dashboard.css';

const left = {
  width: '35%',
  float: 'left'
};

const right = {
  width: '65%',
  float: 'right'
};

// const tabStyle = {
//   width: '50%',
//   margin: '0 auto'
// };

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      avatar: null,
      type: null,
      events: []
    }
    this.createEvent = this.createEvent.bind(this);
    this.renderLikedPhotographer = this.renderLikedPhotographer.bind(this);
  }

  createEvent(title, description, date, price, location) {
    axios.post("/opportunities/:id/add", { title: title, description: description, date: date, price: price, location: location })
      .then((res) => {
        let newEvents = res.data;
        this.setState({events: newEvents});
        newEvents.map(function(event) {
          let date = event.event_date.toString().split('T')[0]
          return (
            <OpportunityEventCard event={event} date={date}/>
            );
        });
      });
  }

  displayEvents(events) {
    if (!events || events.length === 0 ) {
      return (
        <p>You have no events yet!</p> )
    } else {
      return events.map(function(event) {
        let date = event.event_date.toString().split('T')[0]
        return (
          <OpportunityEventCard event={ event } date={ date }/>
        )
      })
    }
  }

  componentDidMount() {
    let currentUser = this.props.currentUser;
    // console.log("this is comp did mount current user", this.props.currentUser);

    axios.get(`/dashboard`, {
      params: {
        currentUser: currentUser
      }
    }).then(response => {
      // console.log("this is app side response", response.data)
      // this.props.getLikedPhotographers(response.data.likes);
      this.setState({
          name: response.data.user[0].first_name + " " + response.data.user[0].last_name,
          avatar: response.data.user[0].profile_image,
          type: response.data.user[0].user_type_id,
          likedPhotographers: response.data.likes
      });
    });

    axios.get('/dashboard/events').then((res) => {
      this.setState({events: res.data})
    })
  }

  renderLikedPhotographer(photographers=[]) {
    const starredPhotographer = {
      width: '150px',
      height: '170px',
      overflow: 'hidden'
    };

    const starredPhotographer__img = {
      width: '100%',
      float: 'left',
      margin: '10px'
    };
    return photographers.map((photographer) => {
      return (
        <div className="photographerContainer">
        <div style={starredPhotographer}>
          <Link to={`/artists/${ photographer.artist_id }`}>
            <img style={starredPhotographer__img} alt="profileimg" src={photographer.profile_image} /><br/>
          </Link>

        </div>
        <h5>{photographer.first_name + ' ' + photographer.last_name}</h5>
        </div>
      )
    })

    axios.get("/dashboard/events").then(res => {
      this.setState({events: res.data})
    });
  }

  render() {
    const userType = this.state.type;

    // const tabs = (
    //   <div style={tabStyle}>
    //     <Tabs>
    //       <TabList>
    //         <Tab>Availability</Tab>
    //         <Tab>Statistics</Tab>
    //       </TabList>

    //       <TabPanel>
    //         <EditAvailability currentUser={this.props.currentUser}/>
    //       </TabPanel>
    //       <TabPanel>
    //         <Statistics />
    //       </TabPanel>
    //     </Tabs>
    //   </div>
    // );

    return (
      <div className='contentWrapper'>

        {/* start left */}
        <div className='left' style={left}>
          <Avatar name={this.state.name} avatar={this.state.avatar} />
          <CreateEvent createEvent={this.createEvent}/>
            { this.displayEvents(this.state.events) }
        </div>

        {/* start right */}
        {userType === 1 ? (
          <div className='right' style={right}>
            {/*tabs*/}
          </div>
        ) : (
            <div className='right' style={right}>
            </div>
          )}
        <h1>Your Favourite Photographers</h1>
        <div className="starredContainer">
          {this.renderLikedPhotographer(this.state.likedPhotographers)}
        </div>
      </div>
    );
  }
}

export default Dashboard;