// import React from "react";
// import ChatFigma from '../../Images/chatfigma.png';
// import "./Chat.css";

import NavBar from "../NavBar/NavBar";
import React, { useState, useEffect, useRef } from "react";
import queryString from 'query-string';
 import io from "socket.io-client";
 import { useLocation, useParams } from "react-router-dom";

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';



//const ENDPOINT = 'URL'; we will put our website as the endpoint link here once we deploy it on herokuapp
let socket;
const ENDPOINT = 'http://127.0.0.1:8080/'
const Chat = ({ location }) => {
  const currentPath = useLocation() // Chat/K/1 
  const url_params = useParams() // get the params
  console.log(currentPath)
  console.log(url_params)
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [userID, setUserID] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, matchID } = url_params ;
    
    // socket = io(ENDPOINT);
    const room = matchID
    setRoom(room);
    setName(name)
    socket = io.connect(ENDPOINT)
    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, url_params]);
  
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

  return (
    <div className="outerContainer">
      <div className="chat-container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
  );
}

export default Chat;

// import { loadInitialChat, disconnectSocket,
//   subscribeToChat, sendMessage, switchRooms } from './Socket';

// // Let's keep track of previous room 

// function Chat() {
//   const rooms = ['A', 'B', 'C'];
//   const [room, setRoom] = useState(rooms[0]);
//   const [message, setMessage] = useState('');
//   const [chat, setChat] = useState([]);

//   const prevRoomRef = useRef();
// useEffect(() => {
//   prevRoomRef.current = room;
// });
// const prevRoom = prevRoomRef.current;

//   // Initiate or Switch Rooms depending on previous and current values
// useEffect(() => {
//   if (prevRoom && room) switchRooms(prevRoom, room);
//   loadInitialChat((err, data) => {
//     if(err) return;
//     setChat(data);
//   });
  
//   // Reset chat messages upon change in room
//   // Avoid subscribeToChat as it will duplicate subscriptions.
//   // Avoid disconnectSocket as cleanup as socket is reused.
// }, []);

// useEffect(() => {
//   subscribeToChat((err, data) => {
//     if(err) return;
//     setChat(oldChats =>[data, ...oldChats])
//   });
// }, []);
//   // useEffect(() => {
//   //   if (room) initiateSocket(room);
//   //   subscribeToChat((err, data) => {
//   //     if(err) return;
//   //     setChat(oldChats =>[data, ...oldChats])
//   //   });
//   //   return () => {
//   //     disconnectSocket();
//   //   }
//   // }, [room]);
// return (
//     <div>
//       <h1>Room: {room}</h1>
//       { rooms.map((r, i) =>
//         <button onClick={() => setRoom(r)} key={i}>{r}</button>)}
//       <h1>Live Chat:</h1>
//       <input type="text" name="name" value={message}
//         onChange={e => setMessage(e.target.value)} />
//       <button onClick={() => {
//   setChat(oldChats => [message, ...oldChats]);
//   sendMessage(room, message);
// }}>Send</button>
//       { chat.map((m,i) => <p key={i}>{m}</p>) }
//     </div>
//   );
// }


// export default Chat;
