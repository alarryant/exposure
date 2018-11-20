import React from 'react';
import Avatar from './components/Avatar.jsx';
import Availability from './components/Availability.jsx';
import Statistics from './components/Statistics.jsx';
import Opportunities from './components/Opportunities.jsx';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import axios from 'axios';

const left = {
  width: '35%',
  float: 'left'
};

const right = {
  width: '65%',
  float: 'right'
};

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      avatar: null,
      type: null
      // events: []
    }
  }

  componentDidMount() {
    // do an axios call to get information for user
    axios.get(`/api/artists/${this.props.match.params.id}/dashboard`).then(response => {
      console.log("RESPONSE: ", response.data);
      this.setState((prevState) => {
        return {
          name: response.data.first_name + " " + response.data.last_name,
          avatar: response.data.profile_image,
          type: response.data.user_type_id
        }
      })
    })
  }

  render() {
    const userType = this.state.type;

    const tabs = (
      <Tabs>
        <TabList>
          <Tab>Availability</Tab>
          <Tab>Statistics</Tab>
        </TabList>

        <TabPanel>
          <Availability />
        </TabPanel>
        <TabPanel>
          <Statistics />
        </TabPanel>
      </Tabs>

    );

    return (
      <div className='contentWrapper'>

        {/* start left */}
        <div className='left' style={left}>
          <Avatar name={this.state.name} avatar={this.state.avatar} />
        </div>

        {/* start right */}
        {userType === 1 ? (
          <div className='right' style={right}>
            {tabs}
          </div>
        ) : (
            <div className='right' style={right}>
              <Opportunities />
            </div>
          )}

      </div>
    );
  }
}

export default Dashboard;