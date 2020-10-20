import React, { Component } from 'react'
import signupImg from '../../Images/signup.svg'
import NavBar from '../NavBar/NavBar'
import heartImg2 from '../../Images/heart2.svg'
import heartImg from '../../Images/heart.svg'
import "./Register.css";
export class Register extends Component {
  render() {
    return (
    <div>
      <NavBar/> 
    <div className="custom-base-container2">
      <div className="signInHeader">
        <center><h3 style={{color:"red"}}>FindLoveNow LOGO</h3></center>
        <center><h3>Sign Up</h3></center>
        <center><h3 style={{fontFamily:"Snell Roundhand, cursive", fontSize:"22px"}}>you are one step closer to finding love</h3></center>
      </div>
        <div className="custom-content-cm">
        <div className="custom-container-right-cm">
          <div className="custom-img-eclipse-cm">
            <img className="custom-image-cm" src={signupImg} />
            <center><h5 className="logo-cm">FindLoveNow</h5></center>
            </div>
          </div>
          <div className="custom-form2-cm">
            <div className="custom-form-group-cm2">
              <label className="custom-label-cm2" htmlFor="username">Name</label>
              <input className ="custom-input-cm2" type="text" name="username" placeholder="Full name" />
            </div>
            <div className="custom-form-group-cm2">
              <label className="custom-label-cm2" htmlFor="email">Email</label>
              <input className ="custom-input-cm2" type="text" name="email" placeholder="Email Address" />
            </div>
            <div className="custom-form-group-cm2">
              <label className="custom-label-cm2" htmlFor="password">Password</label>
              <input className ="custom-input-cm2" type="text" name="password" placeholder="Password" />
            </div>
            <div className="custom-form-group-cm2">
              <label className="custom-label-cm2" htmlFor="password">Confirm Password</label>
              <input className ="custom-input-cm2" type="text" name="password" placeholder="Repeat Password" />
            </div>
          </div>
          <div className="custom-spacing-btn2-cm">
          <button type="button" className="custom-button2-cm">
            Register
          </button>
          </div>
        </div>
      </div>
    </div>     
    )  
  }
}

export default Register