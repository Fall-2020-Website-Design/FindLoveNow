import React, { Component } from 'react'
import signupImg from '../../Image/signup.svg'
import NavBar from '../NavBar/NavBar'
export class Register extends Component {
  render() {
    return (
      <div className="base-container">
        <NavBar/> 
        <div  className="signInHeader">
      < h2 > Register Now</h2 >
        <h4>Sign up to FindLoveNow</h4>
        </div >
        <div className="content">
        <div className="container-right">
            <div className="image">
            <img src={signupImg} />
            </div>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Name</label>
              <input type="text" name="username" placeholder="Full name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn2">
            Register
          </button>
        </div>
      </div>          
    )  
  }
}

export default Register
