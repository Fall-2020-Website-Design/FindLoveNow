import React, { Component } from 'react'
import './App.css'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import About from './Components/About/About'
import Profile from './Components/Profile/Profile'
import Matches from './Components/Matches/Matches'
import Chat from './Components/Chat/Chat'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

export class App extends Component{
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Profile" component={Profile}/>
          <Route exact path="/Home" component={Matches}/>
          <Route exact path="/Chat" component={Chat}/>
        </Switch>
      </Router>
    );
  }
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
