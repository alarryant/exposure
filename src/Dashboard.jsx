import React from 'react';
import Avatar from './components/Avatar.jsx';
// import EditAvailability from './components/Availability.jsx';
// import Statistics from './components/Statistics.jsx';
import CreateEvent from './CreateEvent';
import OpportunityEventCard from './components/Opportunity_EventCard.jsx'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import './styles/Dashboard.css';
import SearchBar from './SearchBar.jsx';

const left = {
  width: '20%',
  float: 'left'
};

const right = {
  width: '80%',
  float: 'right'
};

const tabStyle = {
  width: '50%',
  margin: '0 auto'
};

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
    this.deleteEvent = this.deleteEvent.bind(this)
  }


  deleteEvent(event, creator) {
    let currentUser = parseInt(this.props.currentUser)
    if (creator === currentUser) {
      axios.post(`/opportunities/${event}/delete`,
        { event_id: event,
          creatorid: creator} )
      .then((res) => {
        let newEvents = res.data;
        this.setState({ opportunities: newEvents });
      })

      axios.get(`/api/opportunities/applied/${this.props.currentUser}`).then(res => {
        this.setState({'appliedopportunities': res.data })
    });

    }
  }

   createEvent(title, description, date, price, location) {
    axios.post("/opportunities/:id/add", { title: title, description: description, date: date, price: price, location: location })
      .then((res) => {
        let newEvents = res.data;
        this.setState({events: newEvents});
        newEvents.map((event) => {
          let date = event.event_date.toString().split('T')[0]
          return (
            <OpportunityEventCard
              deleteEvent={this.deleteEvent}
              event={event}
              date={date}
              currentUser={this.props.currentUser}
              />
            );
        });
      });
  }


  displayEvents(events) {
    if (!events || events.length === 0 ) {
      return (
        <p>You have no events yet! Why not create one?</p> )
    } else {
      return events.map((event) => {
        let date = event.event_date.toString().split('T')[0]
        return (
          <OpportunityEventCard
              deleteEvent={this.deleteEvent}
              event={event}
              date={date}
              currentUser={this.props.currentUser}
              />
        )
      })
    }
  }

  componentDidMount() {
    let currentUser = this.props.currentUser;
    axios.get(`/dashboard`, {
      params: {
        currentUser: currentUser
      }
    }).then(response => {
      this.setState({
          name: response.data.user[0].first_name + " " + response.data.user[0].last_name,
          avatar: response.data.user[0].profile_image,
          type: response.data.user[0].user_type_id,
          likedPhotographers: response.data.likes,
          userevents: response.data.events
      });
    });
  }

  componentDidUpdate() {
    let currentUser = this.props.currentUser;
    axios.get(`/dashboard`, {
      params: {
        currentUser: currentUser
      }
    }).then(response => {
      this.setState({
          likedPhotographers: response.data.likes,
          userevents: response.data.events
      });
    });
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
        <div className="photographerContainer" key={photographer.artist_id}>
        <div style={starredPhotographer}>
          <Link to={`/artists/${ photographer.artist_id }`}>
            <img style={starredPhotographer__img} alt="profileimg" src={photographer.profile_image} /><br/>
          </Link>

        </div>
        <h5>{photographer.first_name + ' ' + photographer.last_name}</h5>
        </div>
      )
    })
  }

  render() {
    const userType = this.state.type;

    const tabs = (
      <div style={tabStyle}>
        <Tabs>
          <TabList>
            <Tab>Favorite Photographers</Tab>
            <Tab>My Events</Tab>
          </TabList>

          <TabPanel>
          <h1>Your Favourite Photographers</h1>
            <div className="starredContainer">
            {this.renderLikedPhotographer(this.state.likedPhotographers)}
            </div>
          </TabPanel>
          <TabPanel>
          <p>Checkout other postings on the<NavLink to="/opportunities">Job Board</NavLink></p>
           <CreateEvent createEvent={this.createEvent}/>
            { this.displayEvents(this.state.userevents) }
          </TabPanel>
        </Tabs>
      </div>
    );

    let search;
    if(this.props.search){
      search = <SearchBar searchResult={this.props.searchResult} />
    }

    return (
      <div className='contentWrapper'>
        {search}
        {/* start left */}
        <div className='left' style={left}>
          <Avatar name={this.state.name} avatar={this.state.avatar} />
        </div>
        {/* start right */}
        {userType === 2 ? (
          <div className='right' style={right}>
            {tabs}
          </div>
        ) : (
            <div className='right' style={right}>
            </div>
          )}
      </div>
    );
  }
}

export default Dashboard;