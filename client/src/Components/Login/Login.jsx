import React from "react";
import loginImg from '../../Images/login.svg';
import heartImg2 from '../../Images/heart2.svg'
import heartImg from '../../Images/heart.svg'
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
        <div className="custom-base-container">
        <div className="signInHeader">
        <center><img style={{width:"30px", height:"30px" }} src={heartImg}/></center>
        <center><h3 style={{color:"red"}}>FindLoveNow LOGO</h3></center>
        <center><img style={{width:"20px", height:"20px" }} src={heartImg}/></center>
        <center><h3>Sign in</h3></center>
        <center><h3>To find your perfect match!</h3></center>
        </div>

        <div className="custom-content-cm">
          <div className="custom-container-right-cm">
          <div className="custom-img-eclipse-cm">
            <img className="custom-image-cm" src={loginImg} />
            <center><h5 className="logo-cm">FindLoveNow</h5></center>
            </div>
          </div>
          <div className="custom-form-cm">
            <div className="custom-form-group-cm">
              <label className="custom-label-cm" htmlFor="username">Email</label>
              <input className ="custom-input-cm" type="text" name="username" placeholder="Email Address" />
            </div>
            <div className="custom-form-group-cm">
              <label className="custom-label-cm" htmlFor="password">Password</label>
              <input className ="custom-input-cm" type="password" name="password" placeholder="Password" />
            </div>
          </div>
          <button type="button" className="custom-button-cm">
            Login
          </button>
        </div>
      </div>
      </div>
    );
  }
}
