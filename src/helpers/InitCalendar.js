import React, { Component } from 'react';
import dayjs from 'dayjs';
import DailyCell from '../components/DailyCell';

class InitCalendar extends Component {
  render() {
    const year = this.props.date.year();
    const month = this.props.date.month();
    const firstDayMonth = this.props.date.date(1).day();
    let currentMonthCount = 0 - firstDayMonth;

    const monthGrid = new Array(6).fill([]).map(() => {
      return new Array(7).fill(null).map(() => {
        currentMonthCount++;
        return dayjs(new Date(year, month, currentMonthCount));
      });
    });
    const weekdays = new Array(7).fill(null).map((_, i) => {
      return dayjs().day(i).format('ddd');
    });
    return (
      <table className="month-grid">
        <thead className="month-grid--head">
          <tr className="weekdays">
            {weekdays.map((day, i) => (
              <th className="weekdays--day" key={i}>
                <span className="header-day">{day}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="month-grid--body">
          {monthGrid.map((row, i) => (
            <tr className="week" key={i}>
              {row.map((day, idx) => (
                <DailyCell day={day} key={idx} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default InitCalendar;
