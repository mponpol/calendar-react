import React from 'react';
import dayjs from 'dayjs';
import './CalHeaderDate.css';

class CalHeaderDate extends React.Component {
  render() {
    const month = dayjs().format('MMM');
    const year = dayjs().year();
    return (
      <div className="cal-header-date">
        {month} {year}
      </div>
    );
  }
}

export default CalHeaderDate;
