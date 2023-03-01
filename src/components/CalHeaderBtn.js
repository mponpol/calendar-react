import React from 'react';
import './CalHeaderBtn.css';

class CalHeaderBtn extends React.Component {
  constructor(props) {
    super(props);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }
  handlePrev() {}
  handleNext() {}
  render() {
    return (
      <div className="cal-header-btn">
        <i onClick={this.handlePrev} className="fa fa-angle-left prev"></i>
        <i onClick={this.handleNext} className="fa fa-angle-right next"></i>
      </div>
    );
  }
}

export default CalHeaderBtn;
