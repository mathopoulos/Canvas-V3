import React from 'react';
import '/src/App.css';
import {syncCodeFunction} from '/src/components/helpers.jsx';


export default function AppNavigation(props) {

  const { shapes } = props;
  const handleExportClick = (event) => {
    event.preventDefault();
    console.log('Shapes:', shapes);

    syncCodeFunction();}
  
  return (
      <div className="titleDiv">
        <img id="titleImage" src="/images/view-list.svg" alt="box-icon" />
        <img id="lineImage" src="/images/line.svg" alt="box-icon" />
        <h3 id="title">Component Builder</h3>
        <div className="dropdown-top">
          <button className="dropbtn-top"><img id="downImage" src="/images/down.svg" alt="box-icon" /></button>
          <div className="topNav-dropdown-content">
            <div id="exportButton" onClick={handleExportClick} >Export Code</div>
          </div>
        </div>
      </div>
  );
}


