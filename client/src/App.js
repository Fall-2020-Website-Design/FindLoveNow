import React, { Component, useState  } from 'react'
import './App.css'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import About from './Components/About/About'
import Profile from './Components/Profile/Profile'
import Matches from './Components/Matches/Matches'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import axios from "axios";
import { AuthProvider } from "./Context/authContext";
import PrivateRoute from './privateRoute';

function App (props) {
  // const existingTokens = JSON.parse(localStorage.getItem("jwtToken"));
  // const [authTokens, setAuthTokens] = useState(existingTokens);
  // const setTokens = (data) => {
  //   localStorage.setItem("jwtToken", JSON.stringify(data));
  //   setAuthTokens(data);
  // }
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register}/>
            <Route exact path="/About" component={About}/>
            <PrivateRoute path="/Profile" component={Profile}/>
            <Route exact path="/Home" component={Matches}/>
          </Switch>
        </Router>
      </AuthProvider>
    );
}

// import { Login, Register } from "./components/login/index";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLogginActive: true
//     };
//   }

//   changeState() {
//     const { isLogginActive } = this.state;

//     if (isLogginActive) {
//       this.rightSide.classList.remove("right");
//       this.rightSide.classList.add("left");
//     } else {
//       this.rightSide.classList.remove("left");
//       this.rightSide.classList.add("right");
//     }
//     this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
//   }

//   render() {
//     const { isLogginActive } = this.state;
//     const current = isLogginActive ? "Register" : "Login";
//     const currentActive = isLogginActive ? "login" : "register";
//     return (
//       <div className="App">
//         <div className="login">
//           <div className="container" ref={ref => (this.container = ref)}>
//             {isLogginActive && (
//               <Login containerRef={ref => (this.current = ref)} />
//             )}
//             {!isLogginActive && (
//               <Register containerRef={ref => (this.current = ref)} />
//             )}
//           </div>
//           <RightSide
//             current={current}
//             currentActive={currentActive}
//             containerRef={ref => (this.rightSide = ref)}
//             onClick={this.changeState.bind(this)}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// const RightSide = props => {
//   return (
//     <div
//       className="right-side"
//       ref={props.containerRef}
//       onClick={props.onClick}
//     >
//       <div className="inner-container">
//         <div className="text">{props.current}</div>
//       </div>
//     </div>
//   );
// };

export default App;
