import React from 'react';

import onlineIcon from '../../Images/onlineIcon.png';
import closeIcon from '../../Images/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/Home"><img src={closeIcon} alt="close icon" /></a> 
    </div>
  </div>
);

export default InfoBar;