import React, { Component,  } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import About from "./Components/About/About";
import Profile from "./Components/Profile/Profile";
import Matches from "./Components/Matches/Matches";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { AuthProvider } from "./Context/authContext";
import PrivateRoute from "./privateRoute";

export class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/About" component={About} />
            <PrivateRoute path="/Profile" component={Profile} />
            <Route exact path="/Home" component={Matches} />
          </Switch>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
