import React, { useState, Component  } from 'react';
import NavBar from '../NavBar/NavBar';
import * as API from "../../util/api"
import { AuthContext } from "../../Context/authContext";
import { Link } from 'react-router-dom';


export class JoinChat extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {
      userID: null,
      name: null, 
      match : [],
    }
  }

 componentDidMount() {
  setTimeout(() => {
    const { userID } = this.context
   this.setState((prevState) => {
    return { userID : userID };
  })
  this.getName()
  this.getAllMatches()
   },5)
 }

 getName = () => {
   API.getName(this.state.userID)
   .then((res) => {
     if (res.status == 200) {
       const name = res.data 
       this.setState({
        name
       })
   }
 })
}

getAllMatches = () => {
  API.getallMatches(this.state.userID)
  .then((res) => {
    if (res.status == 200) {
      for (let i = 0; i < res.data.length ; i++ ) {
        const { matchID , requesterID, addresseeID, name } = res.data[i]
        const match = {
          matchID,
          requesterID,
          addresseeID,
          name
        }
        this.setState(prevState => {
          return { match: [...prevState.match, match]}
        })
      }
    }
  })
}



 componentDidUpdate(prevProps,prevState) {
   if (prevState.userID !== this.state.userID) {
    console.log(this.state)
   }
 } 

 render() {
   const matchItem = this.state.match
   return (
     <div>
       <NavBar />
       <h1> Your list of matches</h1>
        <div>
          <ul>
            {matchItem.map((element) => (
              <li key={element.matchID}>
                <Link to={`/chat?name=${this.state.name}&room=${element.matchID}`}>
                  {element.name} 
                </Link>
              </li>  
            ))}
          </ul>
        </div>
     </div>
   )
 }
}
export default JoinChat
