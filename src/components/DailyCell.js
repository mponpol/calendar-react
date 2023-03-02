import dayjs from 'dayjs';
import React, { Component } from 'react';
import './DailyCell.css';

class DailyCell extends Component {
  render() {
    const isCurrentDay =
      this.props.day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
        ? 'current-day'
        : '';

    // const isPrevMonthDay = this.props.day.format('MM')

    return (
      <td className="cal-daily-cell">
        <header className={`cal-daily-cell--top ${isCurrentDay}`}>
          <p className="cal-daily-cell--top-day">
            {this.props.day.format('D')}
          </p>
        </header>
        <div className="cal-daily-cell--body"></div>
      </td>
    );
  }
}

export default DailyCell;
