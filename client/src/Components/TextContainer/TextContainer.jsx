import React from 'react';
import Logo from '../Animation/Logo';
import onlineIcon from '../../Images/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="custom-textContainer">
    <div>
      <h1><Logo/><span role="img" aria-label="emoji">💬</span></h1>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="custom-activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="custom-activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;