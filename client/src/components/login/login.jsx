import React from "react";
import loginImg from '../../Images/login.svg';
import NavBar from '../NavBar/NavBar'

import "./Login.css";
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <NavBar/>
        <div className="signInHeader">
        <h2>Sign In</h2>
        <h4>Sign in to find your perfect match</h4>
        </div>

        <div className="content">
          <div className="container-right">
            <div className="image">
            <img src={loginImg} />
            </div>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input type="text" name="username" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}