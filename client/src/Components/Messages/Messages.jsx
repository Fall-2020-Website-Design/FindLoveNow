// import React from 'react';

// import './Messages.css';

// import ReactEmoji from 'react-emoji'; //to use emojis in the messages
// import React from 'react';

// import './Message.css';

// import ReactEmoji from 'react-emoji';

// const Message = ({ message: { text, user }, name }) => {
//   let isSentByCurrentUser = false;

//   const trimmedName = name.trim().toLowerCase();

//   if(user === trimmedName) {
//     isSentByCurrentUser = true;
//   }

//   return (
//     isSentByCurrentUser
//       ? (
//         <div className="messageContainer justifyEnd">
//           <p className="sentText pr-10">{trimmedName}</p>
//           <div className="messageBox backgroundBlue">
//             <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
//           </div>
//         </div>
//         )
//         : (
//           <div className="messageContainer justifyStart">
//             <div className="messageBox backgroundLight">
//               <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
//             </div>
//             <p className="sentText pl-10 ">{user}</p>
//           </div>
//         )
//   );
// }

// export default Message;



import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

import './Messages.css';

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
  </ScrollToBottom>
);

export default Messages;