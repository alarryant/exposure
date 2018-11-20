import React from 'react';
import Avatar from './components/Avatar.jsx';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import axios from 'axios';

const left = {
  width: '35%',
  float: 'left'
};

const right = {
  width: '65%',
  float: 'right'
};

const calendarWidget = {
  width: '400px',
  margin: '0 auto'
};

const statsWidget = {
  width: '400px',
  margin: '0 auto'
};

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      avatar: null,
      events: []
    }

    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    // do an axios call to get information for user
    axios.get(`/api/artists/${this.props.match.params.id}/dashboard`).then(response => {
      this.setState((prevState) => {
        return {
          name: response.data.name,
          avatar: response.data.avatar,
          events: response.data.events
        }
      })
    })
  }

  getUser(user){
    this.setState({currentUser : user});
  }

  render() {
  return (
    <div className='contentWrapper'>
      {/* start left */}
      <div className='left' style={left}>
        <Avatar name={ this.state.name } avatar={ this.state.avatar } />
      </div>

      {/* start right */}
      <div className='right' style={right}>
        {/* start Calendar Widget */}
        <div className='calendarWidget' style={calendarWidget}>
          <a className='calendarWidget__title'>Calendar</a>
          <div className='calendarWidget__calendar'>
            <DayPicker
              className="Selectable"
              numberOfMonths={this.props.numberOfMonths}
              initialMonth={new Date(2018, 11)}
              disabledDays={[
              new Date(2018, 11, 12),
              new Date(2018, 11, 2),
              {
                after: new Date(2018, 11, 20),
                before: new Date(2018, 11, 25),
              },
            ]}
            />
          </div>
        </div>

        {/* start Statistic Widget */}
        <div className='statsWidget' style={statsWidget}>
          <a className='statsWidget__title'>Statistics</a>
          <div className='statsWidget__graph'>
          </div>
        </div>

      </div>
      
    </div>
  );
 }
}

export default Dashboard;