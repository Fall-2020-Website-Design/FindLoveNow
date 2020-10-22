import React from "react";
import loginImg from '../../Images/login.svg';
import heartImg2 from '../../Images/heart2.svg'
import heartImg from '../../Images/heart.svg'
import NavBar from '../NavBar/NavBar'
import * as API from "../../util/api"
import "./Login.css";
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from "jwt-decode";
import { AuthContext } from "../../Context/authContext";
import { Link, Redirect } from "react-router-dom";

export class Login extends React.Component {
  
  static contextType = AuthContext

  constructor(props) {
    super(props);
    this.state = {
      userID: null,
      email: "",
      password: "",
      errors: [],
    }
  }
  componentDidUpdate() {
    const {isAuthenicated } = this.context
    console.log("this is the value of authenticated from CONTEXT " + isAuthenicated)
    // const referer = location.state.referer || '/';
      if (isAuthenicated) {
      return <Redirect to="/" />;
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

  // eventually api call to the backend
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, errors} = this.state
    // console.log(authData)
    API.LoginUser({
      email,
      password
    }).then((result) => {
      if (result.status == 200) {
        const { setUser,userID, email, isAuthenicated, setTokens , setAuthToken} = this.context
        console.log(result)
        const {token } = result.data
        // localStorage.setItem("jwtToken", token)
        // let x = this.API.setAuthToken(token)
        // console.log(`hello from console log ${token}`)
        const decoded = jwt_decode(token)
        console.log(decoded)
        console.log(`testing decoded variable ${JSON.stringify(decoded)}`)
        setUser(decoded)
        setTokens(token)
        setAuthToken(token)
        // console.log("Im logged in successfully")
        // console.log(userID, email,isAuthenicated) // why doesn't this update on the first try????
        }
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
        <NavBar/>
        <div className="custom-base-container">
        <div className="signInHeader">
        <center><h3 style={{color:"red"}}>FindLoveNow LOGO</h3></center>
        <center><img style={{width:"30px", height:"30px" }} src={heartImg}/></center>
        <center><h3>Sign In</h3></center>
        <center><h3 style={{fontFamily:"Snell Roundhand, cursive", fontSize:"25px"}}>to find your perfect match  <img style={{width:"10px", height:"10px" }} src={heartImg}/></h3></center>
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
              <input className ="custom-input-cm" id="email" type="text" name="email" placeholder="Email Address"
              onChange={this.handleChange("email")}
              />
            </div>
            <div className="custom-form-group-cm">
              <label className="custom-label-cm" htmlFor="password">Password</label>
              <input className ="custom-input-cm" id="password" type="password" name="password" placeholder="Password" 
              onChange={this.handleChange("password")}
              />
            </div>
          </div>
          <div className="custom-spacing-btn-cm">
          <button type="button" className="custom-button-cm" onClick={this.handleSubmit}>
            Login
          </button>
          </div>

        </div>
      </div>
      </div>
    );
  }
}

export default Login