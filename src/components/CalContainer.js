import React from 'react';
import CalHeader from './CalHeader';
import MonthGrid from './MonthGrid';
import './CalContainer.css';

class CalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cal-container">
        <CalHeader />
        <MonthGrid />
      </div>
    );
  }
}

export default CalContainer;
