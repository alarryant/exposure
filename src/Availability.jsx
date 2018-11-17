import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class Example extends React.Component {
  static defaultProps = {
    numberOfMonths: 1,
  };
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }
  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }
  handleResetClick() {
    this.setState(this.getInitialState());
  }

  handleSubmitClick() {
    this.props.saveAvailability({start_date: this.state.from, end_date: this.state.to});
  }

  disabledDays() {

  }
  render() {
    // this.props.saveAvailability({from, to});
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className="RangeExample">
        <p>
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
          {from &&
            to && (
              <button className="link" onClick={this.handleResetClick}>
                Reset
              </button>

            )}
            <button onClick={this.handleSubmitClick}>Submit</button>
        </p>
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
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
    );
  }
}

export default Example
