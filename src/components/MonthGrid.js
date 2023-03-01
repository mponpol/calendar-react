import dayjs from 'dayjs';
import React from 'react';
import InitCalendar from '../helpers/InitCalendar';
import './MonthGrid.css';

class MonthGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: dayjs() };
  }
  render() {
    return <InitCalendar date={this.state.date} />;
  }
}

export default MonthGrid;
