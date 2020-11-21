import React, { useState, Component  } from 'react';
import NavBar from '../NavBar/NavBar';
import * as API from "../../util/api"
import { AuthContext } from "../../Context/authContext";


export class JoinChat extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {
      userID: null,
      name: null, 
      match : {
        matchID: null,
        requesterID: null,
        addresseeID: null, 
      },
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
        // const { matchID , requesterID, addresseeID} = res.data[i]
        let match = Object.assign(res.data[i], this.state.match)
      }
      console.log(this.state)
    }
  })
}



 componentDidUpdate(prevProps,prevState) {
   if (prevState.userID !== this.state.userID) {
    console.log(this.state)
   }
 }  
 render() {
   return (
     <div>
       <NavBar />
       <h1 onClick={this.getName}> hello world</h1>
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