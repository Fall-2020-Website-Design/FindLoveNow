const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
global.__basedir = __dirname;
const db = require('./models');

const PORT = process.env.PORT || 8080;

const apiRoutes = require('./routes/api/index');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./services/chat');


const app = express();
const options = {
  cors:true,
 origins:["http://127.0.0.1:8080"],
}
const server = require('http').createServer(app);
const io = require('socket.io')(server, options);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extendd: false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
});



// for production use, we serve the static react build folder
if(process.env.NODE_ENV==='production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  
    // all unknown routes should be handed to our react app
    app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
  }

  app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
  app.use('/api', apiRoutes)
  
  
// update DB tables based on model updates. Does not handle renaming tables/columns
// NOTE: toggling this to true drops all tables (including data)
db.sequelize.sync({ force: false });

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  io.on('connect', (socket) => {
    console.log(`This is calling socket right after io connect on the server side ${socket}`)
    socket.on('join', ({ name, room }, callback) => {
      const socketID = socket.id
      const { error, user } = addUser({ sockerID : userID , name, room });


      if(error) return callback(error);


      console.log(`Socket ${socket.id} joining ${room}`);
      socket.join(user.room);
      
      // Welcome current user
      socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});

      // Broadcoast when a user connects
      socket.broadcast.
      to(user.room).
      emit('message', { user: 'admin', text: `${user.name} has joined!` });
      
      // Send users and room info
      io.to(user.room)
      .emit('roomUsers', { room: user.room, users: getUsersInRoom(user.room) });
  
      callback();
    });

    // Listen for chat Message 
    socket.on('sendMessage', (message, callback) => {
      const user = getUser(socket.id);
      console.log(`Getting the sendMessage data on the event sendMessage ${message}` )
      io.to(user.room).emit('message', { user: user.name, text: message });
  
      callback();
    });
    
    // Run when Client disconnects
    socket.on('disconnect', () => {
      console.log(`Disconnected: ${socket.id}`)
      const user = removeUser(socket.id);
      if(user) {

        io.to(user.room)
        .emit('message', { user: 'Admin', text: `${user.name} has left.` });


        //Send users and room info 
        io.to(user.room)
        .emit('roomUsers', { room: user.room, users: getUsersInRoom(user.room)});
      }
    })
   });



  
// start up the server
server.listen(PORT, () => console.log(`Listening on ${PORT}`));



module.exports = app;