import React from 'react';
import './CalHeaderGoTo.css';

export default function CalHeaderGoTo() {
  return (
    <div className="goto-today">
      <div className="goto">
        <input
          typeof="text"
          placeholder="mm/yyyy"
          className="date-input"
        ></input>
        <button className="goto-btn">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <button className="today-btn">today</button>
    </div>
  );
}
