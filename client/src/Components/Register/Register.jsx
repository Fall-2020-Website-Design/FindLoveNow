import React, { Component } from 'react';
import signupImg from '../../Images/signup.svg';
import NavBar from '../NavBar/NavBar';
import "./Register.css";
import * as API from "../../util/api";
import Logo from '../Animation/Logo';
import heartImg from '../../Images/heart.svg';
import Footer from '../Footer/Footer';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';


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


  // eventually api call to call the backend
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, password2 } = this.state;
    API.Register({
      name,
      email,
      password,
      password2
    }).then((result) => {
      if (result.status === 200) {
        this.props.history.push('/login')
      }
    })
      .catch((errors) => {
        if (errors.response) {
          const errorMsg = errors.response.data
          let errorArray = []
          errorMsg.errors.forEach(element => {
            errorArray.push(element.msg)
          })
          this.setState({
            errors: errorArray
          })
        }
      })
  }
  render() {
    return (
      <div>
        <NavBar />
        <Form onSubmit={this.handleSubmit}>
          <div className="CM_Register_padding">
            <div className="custom-base-container2">
              <div className="row-cm-register">
                <div className="column-cm-register">
                  <div className="HeaderPadding2">
                    <div className="signInHeader2">
                      <center><img style={{ width: "40px", height: "40px" }} src={heartImg} /><Logo /></center>
                      <center><h3>Sign Up</h3></center>
                      <center><h3 style={{ fontFamily: "Snell Roundhand, cursive", fontSize: "25px" }}>you are one step closer to finding love</h3></center>
                    </div>
                    <div>
                      <ul>
                        {this.state.errors.length > 0 ? 
                          this.state.errors.map((error, index) => {
                            return <li key={index} >  <Alert variant="danger"> {error} </Alert></li>
                          }) : null 
                        }
                      </ul>
                    </div>
                  </div>
                  <div className="custom-form2-cm">
                    <div className="custom-form-group-cm2">
                      <label className="custom-label-cm2" htmlFor="name">Name</label>
                      <input className="custom-input-cm2" type="text" name="name" placeholder="Full name"
                        onChange={this.handleChange("name")}
                      />
                    </div>
                    <div className="custom-form-group-cm2">
                      <label className="custom-label-cm2" htmlFor="email">Email</label>
                      <input className="custom-input-cm2" id="email" type="email" name="email" placeholder="Email Address"
                        onChange={this.handleChange("email")}
                      />
                    </div>
                    <div className="custom-form-group-cm2">
                      <label className="custom-label-cm2" htmlFor="password">Password</label>
                      <input className="custom-input-cm2" id="password" type="password" name="password" placeholder="Password"
                        onChange={this.handleChange("password")}
                      />
                    </div>
                    <div className="custom-form-group-cm2">
                      <label className="custom-label-cm2" htmlFor="password2">Confirm Password</label>
                      <input className="custom-input-cm2" id="password2" type="password" name="password2" placeholder="Repeat Password"
                        onChange={this.handleChange("password2")}
                      />
                    </div>
                  </div>
                  <center>
                    <button type="submit" className="custom-button2-cm">
                      Register
          </button>
                  </center>
                </div>
                <div className="column-cm-register">
                  <div className="custom-container-right-cm">
                    <div className="custom-img-eclipse-cm">
                      <img className="custom-image-cm" src={signupImg} />
                      <center><Logo /></center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
        <div className="white-bg"><Footer /></div>
      </div>
    )
  }
}

export default Register