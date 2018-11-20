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
      type: null
      // events: []
    }
  }

  componentDidMount() {
    axios.get(`/dashboard`).then(response => {
      console.log("RESPONSE: ", response.data[0]);
      this.setState((prevState) => {
        return {
          name: response.data[0].first_name + " " + response.data[0].last_name,
          avatar: response.data[0].profile_image,
          type: response.data[0].user_type_id
        }
      })
    })
  }

  render() {
    const userType = this.state.type;
    console.log("THE PROPS: ", this.props.currentUser);

    const tabs = (
      <div style={tabStyle}>
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
      </div>
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