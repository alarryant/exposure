import React from 'react';
import DayPicker from 'react-day-picker';
import axios from 'axios';

import 'react-day-picker/lib/style.css';

class EditAvailability extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.formatDate = this.formatDate.bind(this);
    this.state = {
      selectedDay: null,
      disabledDays: []
    };
  }
  handleDayClick(day) {
    axios.post(`/artists/${this.props.artistId}/editavailability`, {selectedDay: day}).then((res) => {
      this.setState({ selectedDay: day, disabledDays: res.data });
    });
  }

  componentDidMount() {
    axios.get(`/artists/${this.props.artistId}/availability`)
     .then((res) => {
        this.setState({disabledDays: res.data});
      });
  }

  formatDate(disabledDays=[]) {
    return disabledDays.map((day) => {
      return new Date(day.date);
    });
  }

  render() {
    return (
      <div>
        <DayPicker
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
          disabledDays={this.formatDate(this.state.disabledDays)}
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
