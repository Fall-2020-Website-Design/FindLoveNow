import React from "react";
import loginImg from "../../login.svg";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">
          <h1>FindLoveNow Logo</h1>
        </div>
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