import React from "react";
import loginImg from '../../Images/login.svg';
import heartImg from '../../Images/heart.svg';
import NavBar from '../NavBar/NavBar';
import * as API from "../../util/api";
import "./Login.css";
import Logo from '../Animation/Logo';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from "jwt-decode";
import { AuthContext } from "../../Context/authContext";


export class Login extends React.Component {
  
  static contextType = AuthContext

  constructor(props) {
    super(props);
    this.state = {
      userID: null,
      email: "",
      password: "",
      errors: [],
      isAuthenticated: false,
    }
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.isAuthenticated !== this.state.isAuthenticated ) {
      this.props.history.push("/Home")
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
    API.LoginUser({
      email,
      password
    }).then((result) => {
      if (result.status === 200) {
        const { setUser,setTokens , setAuthToken} = this.context
        console.log(result)
        const {token } = result.data
        const decoded = jwt_decode(token)
        setUser(decoded)
        setTokens(token)
        setAuthToken(token)
        this.setState((prevState) => {
          return { userID: decoded.id, email: decoded.email, isAuthenticated: true };
          })
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
        <div className="CM_Login_padding">
        <div className="custom-base-container">
        <div class="row-cm-login">
        <div class="column-cm-login">
        <div className="HeaderPadding">
        <div className="signInHeader">
        <center><img style={{width:"30px", height:"30px"}} src={heartImg}/><Logo/></center>
        <center><h3>Sign In</h3></center>
        <center><h3 style={{fontFamily:"Snell Roundhand, cursive", fontSize:"25px"}}>to find your perfect match  <img style={{width:"10px", height:"10px" }} src={heartImg}/></h3></center>
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
          <center><button type="button" className="custom-button-cm" onClick={this.handleSubmit}>
            Login
          </button>
          </center>
        </div>
        <div class="column-cm-login">
        <div className="custom-container-2-cm">
        <div className="custom-img-eclipse-cm">
        <center><img className="custom-img-cm" src={loginImg} /></center>
        <center><Logo/></center>
        </div>
        </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Login