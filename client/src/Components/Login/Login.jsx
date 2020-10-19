import React from "react";
import loginImg from '../../Images/login.svg';
import heartImg2 from '../../Images/heart2.svg'
import heartImg from '../../Images/heart.svg'
import NavBar from '../NavBar/NavBar'
import * as API from "../../util/api"
import "./Login.css";
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";


export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: null,
      email: "",
      password: "",
      isAuthenticated: true,
      errors: [],
    }
  }





  // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  helloworldtest = () => {
    API.helloworldtest().
      then((res) => {
        console.log(res)
      }).catch(errors => {
        console.log(errors)
      })
  }
  // eventually api call to call the backend

  // TypeError: Cannot read property 'setAuthToken' of undefined
// at Login.jsx:54
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, error } = this.state;
    API.LoginUser({
      email,
      password
    }).then((res) => {
      console.log(res)
      const {token } = res.data
      localStorage.setItem("jwtToken", token)
      let x = this.API.setAuthToken(token)
      console.log(`hello from console log ${token}`)
      const decoded = jwt_decode(token)
      console.log(decoded)
      console.log(`testing decoded variable ${JSON.stringify(decoded)}`)
      console.log(console.log(x))
      this.setState({
        userID: decoded.id,
        email: decoded.email,
        isAuthenticated: true
      })
      console.log("Im logged in successfully")
      console.log(this.state)
    })
    .catch((errors) => {
      console.log(errors)
      this.setState({
        errors
      })
    })
  };

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <NavBar />
        <div className="custom-base-container">
          <div className="signInHeader">
            <center><img style={{ width: "30px", height: "30px" }} src={heartImg} /></center>
            <center><h3 style={{ color: "red" }}>FindLoveNow LOGO</h3></center>
            <center><img style={{ width: "20px", height: "20px" }} src={heartImg} /></center>
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
                  <label className="custom-label-cm" htmlFor="email">Email</label>
                  <input className="custom-input-cm" id="email "type="email" name="email" placeholder="Email Address" 
                  onChange={this.handleChange("email")}
                  />
                </div>
                <div className="custom-form-group-cm">
                  <label className="custom-label-cm" htmlFor="password">Password</label>
                  <input className="custom-input-cm" id="passowrd" type="password" name="password" placeholder="Password"
                  onChange={this.handleChange("password")}
                  />
                </div>
              </div>
              <button type="button" className="custom-button-cm" onClick={this.handleSubmit}>
                Login
              </button>
            </div>
        </div>
      </div>
    );
  }
}

export default Login