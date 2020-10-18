const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const db = require('./models');

const PORT = process.env.PORT || 5000;

const apiRoutes = require('./routes/api/index');


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extendd: false}));
app.use(bodyParser.json());

// for production use, we serve the static react build folder
if(process.env.NODE_ENV==='production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  
    // all unknown routes should be handed to our react app
    app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
  }
  
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
  
// Test the connection
// start up the server
app.listen(PORT, () => console.log(`Listening on ${PORT}`));



module.exports = app;