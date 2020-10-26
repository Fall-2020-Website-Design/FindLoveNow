import React from "react";
import ChatFigma from '../../Images/chatfigma.png';
import "./Chat.css";

import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
export default class Chat extends React.Component {

  render() {
    return (
      <>
        <NavBar />
        <p>Hello I finished the front end code but for now it will be commented out until the backend is connected to socket io, for the frontend to be properly displayed. I created components called InfoBar, Input, Messages, Text Container, and imported them all into the Chat.<img style={{ width: "1450px", height: "800px" }} src={ChatFigma} /></p>
      </>
    );
  }
}

//Uncomment when Jacky finishes backend of chat and delete the top part

/*
import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
//import io from 'socket.io-client';

//Importing other components needed for Chat:
import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import "./Chat.css";



//const ENDPOINT = 'URL'; we will put our website as the endpoint link here once we deploy it on herokuapp
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

export default class Chat extends React.Component {
  render() {
    return (
        <div className="outerContainer">
        <div className="container">
            <InfoBar room={room} />
            <Messages messages={messages} name={name} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
        <TextContainer users={users}/>
      </div>
    );
    }
  }
}
*/
