import React from 'react';
import { Link } from 'react-router-dom';

import onlineIcon from '../../Images/onlineIcon.png';
import closeIcon from '../../Images/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room, leaveChatRoom }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
<<<<<<< HEAD
      <Link onClick={() => leaveChatRoom()}to={"/joinchat"}><img src={closeIcon} alt="close icon" /> </Link>
=======
      <a href="/Home"><img src={closeIcon} alt="close icon" /></a> 
>>>>>>> 175780c92c1cf37b36c3bfbf6b936a62e96c9f76
    </div>
  </div>
);

export default InfoBar;