import React, { Component } from 'react'
import signupImg from '../../Images/signup.svg'
import NavBar from '../NavBar/NavBar'
import heartImg2 from '../../Images/heart2.svg'
import heartImg from '../../Images/heart.svg'
import "./Register.css";
import * as API from "../../util/api"
export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: []
    }
  }

  // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  testhelloworld = () => {
    API.helloworldtest.
      then((res) => {
        console.log(res)
      }).catch(errors => {
        console.log(errors)
      })
  }
  // eventually api call to call the backend
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    this.testhelloworld()
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="custom-base-container2">
          <div className="signInHeader">
            <center><h3 style={{ color: "red" }}>FindLoveNow</h3></center>
            <center><h3>Sign Up</h3></center>
            <center><h3>You are one step closer to finding love!</h3></center>
          </div>
          <div className="custom-content-cm">
            <div className="custom-container-right-cm">
              <div className="custom-img-eclipse-cm">
                <img className="custom-image-cm" src={signupImg} />
                <center><h5 className="logo-cm">FindLoveNow</h5></center>
              </div>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="custom-form-cm">
                <div className="custom-form-group-cm">
                  <label className="custom-label-cm" htmlFor="name"> Name </label>
                  <input className="custom-input-cm" id="name" type="text" name="name" placeholder="Full name"
                   onChange={this.handleChange("name")}/>
                </div>
                <div className="custom-form-group-cm">
                  <label className="custom-label-cm" htmlFor="email">Email</label>
                  <input className="custom-input-cm" id="email" type="email" name="email" placeholder="Email Address" 
                  onChange={this.handleChange("email")}
                  />
                </div>
                <div className="custom-form-group-cm">
                  <label className="custom-label-cm" htmlFor="password">Password</label>
                  <input className="custom-input-cm" id="password" type="password" name="password" placeholder="Password"
                  onChange={this.handleChange("password")}
                  />
                </div>
                <div className="custom-form-group-cm">
                  <label className="custom-label-cm" htmlFor="password2">Confirm Password</label>
                  <input className="custom-input-cm" id="password2" type="password" name="password2" placeholder="Repeat Password" 
                  onChange={this.handleChange("password2")}
                  />
                </div>
              </div>

              <button type="button" className="custom-button2-cm">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
