import io from 'socket.io-client';
let socket;
export const loadInitialChat = (cb) => {
  socket = io('http://localhost:8080');
  console.log(`Connecting socket...`);
  socket.on('joinResponse', msg => cb(null, msg));
}
export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if(socket) socket.disconnect();
}
export const subscribeToChat = (cb) => {
  if (!socket) return(true);
  socket.on('chat', msg => {
    console.log('Websocket event received!');
    return cb(null, msg);
  });
}
export const sendMessage = (room, message) => {
  if (socket) socket.emit('chat', { message, room });
}

export const switchRooms = (prevRoom, nextRoom) => {
  if (socket) socket.emit('switch', { prevRoom, nextRoom });
}