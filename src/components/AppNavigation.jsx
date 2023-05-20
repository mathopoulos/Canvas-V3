import React from 'react';
import '/src/App.css';

export default function AppNavigation() {
  
  return (
      <div className="titleDiv">
        <img id="titleImage" src="/public/images/view-list.svg" alt="box-icon" />
        <img id="lineImage" src="/public/images/line.svg" alt="box-icon" />
        <h3 id="title">Username Input</h3>
        <div className="dropdown1">
          <button className="dropbtn"><img id="downImage" src="/public/images/down.svg" alt="box-icon" /></button>
          <div className="dropdown-content">

          </div>
        </div>
      </div>
  );
}
