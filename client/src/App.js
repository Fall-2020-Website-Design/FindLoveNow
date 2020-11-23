import React, { Component,  } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import About from "./Components/About/About";
import Profile from "./Components/Profile/Profile";
import Matches from "./Components/Matches/Matches";
import Filter from "./Components/Filter/Filter";
import Chat from "./Components/Chat/Chat";
import Join from './Components/JoinChat/Join';
import Call from './Components/VideoCall/VideoCall';
import Home from './Components/Home/Home';

import BlindDate from "./Components/BlindDate/BlindDate";
import RequiredForm from "./Components/RequiredForm/RequiredForm";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import { AuthProvider } from "./Context/authContext";
import PrivateRoute from "./privateRoute";

export class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/Form" component={RequiredForm} />
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/About" component={About} />
            <PrivateRoute path="/Profile" component={Profile} />
            <PrivateRoute exact path="/Filter" component={Filter} />
            <Route path="/Chat" component={Chat}/>
            <Route path="/joinchat" component={Join}/>
            <PrivateRoute path="/videocall" component={Call}/>
            <PrivateRoute exact path="/Home" component={Matches} />
            <PrivateRoute exact path="/BlindDate" component={BlindDate} />
          </Switch>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
