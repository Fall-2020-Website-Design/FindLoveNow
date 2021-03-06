const users = [];


const addUser = ({ id , name, room , userID}) => {

  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const user = { id, name, room , userID };

  users.push(user);
  console.log(users)
  return { user };
} 
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if(index !== -1) return users.splice(index, 1)[0];
}

const switchRoom = (room) => {
  const roomIsFound = users.findIndex((user) => user.room == room);
  if (roomIsFound !== -1 ) return users[roomisFound]["room"] = room
}

// Leaves the room 
const leaveRoom = (room) => {
  const index = users.findIndex((user) => user.room == room);
  if (index !== -1) return users.splice(index,1)[0]
}
// get the Current User
const getUser = (id) => users.find((user) => user.id === id);

// Get the Room Users
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom , switchRoom, leaveRoom};