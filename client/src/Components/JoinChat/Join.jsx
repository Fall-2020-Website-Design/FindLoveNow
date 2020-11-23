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

  /*
  match: {
    matchID: 1,
    requesterID: 2
    addresseeID: 3
  },
  {
   matchID: 2,
   requesterID: 2,
   addresseeID: 4 
  }
  */

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
        // name is undefined when I call it here ....
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


// export default function SignIn() {
//   const [name, setName] = useState('');
//   const [room, setRoom] = useState('');

//   return (
//     <div className="joinOuterContainer">
//       <div className="joinInnerContainer">
//         <h1 className="heading">Join</h1>
//         <div>
//           <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
//         </div>
//         <div>
//           <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
//         </div>
//         <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
//           <button className={'button mt-20'} type="submit">Sign In</button>
//         </Link>
//       </div>
//     </div>
//   );
// }