import React from 'react';
import DayPicker from 'react-day-picker';
import axios from 'axios';

import 'react-day-picker/lib/style.css';

class EditAvailability extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
      disabledDays: undefined
    };
  }
  handleDayClick(day) {
    axios.post(`/artists/${this.props.artistId}/editavailability`, {selectedDay: day}).then((res) => {
      this.setState({ selectedDay: day, disabledDays: res.data });
    });
  }

  componentDidMount() {
    console.log("this is comp will mt avail", this.props.artistId);
    axios.get(`/artists/${this.props.artistId}/availability`)
     .then((res) => {
        this.setState({disabledDays: res.data});
      });
  }

  render() {
    return (
      <div>
        <DayPicker
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
        />
        {this.state.selectedDay ? (
          <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
        ) : (
          <p>Please select a day.</p>
        )}
      </div>
    );
  }
}

export default EditAvailability
