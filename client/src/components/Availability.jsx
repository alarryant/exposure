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
      disabledDays: [],
    };
  }
  handleDayClick(day) {
    let alreadyDisabled = false;
    this.state.disabledDays.forEach((disabledDay) => {
      let formattedDate = new Date(disabledDay.date).getTime();
      let formattedSelectedDate = day.getTime();
      if (formattedDate === formattedSelectedDate) {
        return alreadyDisabled = true;
      }
    });

    if (alreadyDisabled === true) {
      return axios.post(`/artists/${this.props.artistId}/removeavailability`,
                        {selectedDay: day})
        .then((res) => {
        this.setState({ selectedDay: day,
                        disabledDays: res.data,
                        message: `You're now available on ${day.toLocaleDateString()}.`});
      });
    } else {
      return axios.post(`/artists/${this.props.artistId}/editavailability`,
                        {selectedDay: day})
        .then((res) => {
        this.setState({ selectedDay: day,
                        disabledDays: res.data,
                        message: `You're not available on ${day.toLocaleDateString()}.` });
      });
    }
  }

  componentDidMount() {
    axios.get(`/artists/${this.props.artistId}/availability`)
     .then((res) => {
        this.setState({ disabledDays: res.data,
                        message: 'Select a day to mark it as unavailable.'});
      });
  }

  formatDate(disabledDays=[]) {
    return disabledDays.map((day) => {
      return new Date(day.date);
    });
  }

  render() {

    return(

        this.props.currentUser === this.props.artistId ? (
          <div>
            <DayPicker
              onDayClick={this.handleDayClick}
              selectedDays={this.state.selectedDay}
              disabledDays={this.formatDate(this.state.disabledDays)}
            />
          <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <DayPicker disabledDays={this.formatDate(this.state.disabledDays)}/>
          </div>
        )
    )
  }
}

export default EditAvailability
