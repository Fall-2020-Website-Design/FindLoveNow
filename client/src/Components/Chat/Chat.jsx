
import NavBar from "../NavBar/NavBar";
import React, { useState, useEffect, useRef , useContext} from "react";
import io from "socket.io-client";
import {useParams} from "react-router-dom";
import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';
import { AuthContext } from "../../Context/authContext";
 


//const ENDPOINT = 'URL'; we will put our website as the endpoint link here once we deploy it on herokuapp
let socket;
const ENDPOINT = 'http://127.0.0.1:8080/'
const Chat = () => {
  const urlParams = useParams()
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const authValue = useContext(AuthContext)


  useEffect(() => {
    const { name, matchID } = urlParams ;
    socket = io(ENDPOINT);
    const room = matchID
    const userID = authValue.userID
    setRoom(room);
    setName(name)
    socket = io.connect(ENDPOINT)
    socket.emit('join', { name, room, userID }, (error) => {
        if(error) {
          alert(error);
        }
      });
    return () => {
      if (room) {
        socket.emit('leaveRoom', { name, room , userID } )
      }
    }
  }, [ENDPOINT, urlParams, authValue.userID]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomUsers", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }


  const leaveChatRoom = () => {
    socket.disconnect()
  }

  return (
    <div className="custom-outerContainer">
      <div className="custom-chat-container">
          <InfoBar room={room} leaveChatRoom={leaveChatRoom}/>
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}


export default Chat;
