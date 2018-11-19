import React from 'react';
import Avatar from './components/Avatar.jsx';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

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

  render() {
  return (
    <div className='contentWrapper'>

      {/* start left */}
      <div className='left' style={left}>
        <Avatar />
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