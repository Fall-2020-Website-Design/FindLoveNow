import "./VideoCall.css";
import NavBar from "../NavBar/NavBar";
import React, { useState, useEffect, useRef } from 'react';
import io from "socket.io-client"; //This is the client facing!
import Peer from "simple-peer";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import close from '../../Images/exit.png';
import Image from 'react-bootstrap/Image';

//Styling:
const Container = styled.div` 
margin: auto;
width: 80%;
background: #FFFFFF;
box-shadow: 0px 4px 25px #bdbdbd;
border-radius: 10px;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Video = styled.video`
  border: 3px solid #ff7575;
  border-radius: 10px;
  width: 50%;
  height: 50%;
`;

function VideoCall() {
  const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);

  const userVideo = useRef();
  const partnerVideo = useRef();
  const socket = useRef();

  useEffect(() => {
    socket.current = io.connect("/videocall");
    console.log(socket.connect);
    console.log("hello");
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => { //Is asking for user's permission to use their camera & audio
      setStream(stream);
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    },[socket.current])

    socket.current.on("yourID", (id) => {
      setYourID(id);
    })
    socket.current.on("allUsers", (users) => {
      setUsers(users);
    })

    socket.current.on("hey", (data) => { //hey you're getting a call signal (notifies you that you are being called by ... do you want to accept?)
    setReceivingCall(true);
    setCaller(data.from);
    setCallerSignal(data.signal);
    })
  }, []);

  function callPeer(id) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream, });

    peer.on("signal", data => {
      socket.current.emit("callUser", {userToCall: id, signalData: data, from: yourID})
    })

    peer.on("stream", stream => { //This allows us to see ourselves and our partner.
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    socket.current.on("callAccepted", signal => { //completes hand shake
      setCallAccepted(true);
      peer.signal(signal);
    })

  }

  function acceptCall() {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", data => {
      socket.current.emit("acceptCall", { signal: data, to: caller })
    })

    peer.on("stream", stream => {
      partnerVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
  }

  let UserVideo; //displays user's video
  if (stream) {
    UserVideo = (
      <Video playsInline muted ref={userVideo} autoPlay /> //autoPlay is why it automatically starts streaming your video
    );
  }

  let PartnerVideo; //Aka Blind date's camera/video
  if (callAccepted) {
    PartnerVideo = (
      <Video playsInline ref={partnerVideo} autoPlay />
    );
  }

  //Change this so it works instead like when you click match me
  //caller is shown as caller name
  let incomingCall;
  if (receivingCall) {
    incomingCall = (
      <div>
        <h1>{caller} is looking for a blind date</h1>
        <button className="BD-button" onClick={acceptCall}>Accept</button>
      </div>
    )
  }

  return (
    <div>
    <NavBar/>
    <div className="topPadding-BD">
    <center><h3 style={{fontFamily:"Snell Roundhand, cursive", fontSize:"35px"}}>Welcome to your blind date with:</h3></center>
    <center><h3 style={{fontFamily:"'Times New Roman', Times, serif;", fontSize:"25px", color:"red"}}>[insert matches name]{caller}</h3></center>
   
    <Container>
      <Row>
        {UserVideo}
        {PartnerVideo}
      </Row>
      <Row>
        {Object.keys(users).map(key => {
          if (key === yourID) {
            return null;
          }
          return (
            <button className="BD-button" onClick={() => callPeer(key)}>Call {key}</button> //Note you can change key Match's name
          ); //This button allows you to call/peer with the specific user.
        })}
      </Row>
      <Row>
        {incomingCall}
      </Row>
    </Container>
    </div>
    <center><h3 style={{fontFamily:"Snell Roundhand, cursive", fontSize:"12px"}}>wait a few seconds while we find your perfect match, when ready click accept</h3></center>
    <Link to="/Home">
    <center><button type="button" className="custom-button-BD-exit">
    <Image src={close} id="exitBD" alt="exitBD" width="35" className="d-block mx-auto" />
          </button>
    </center>
    </Link>
    </div>
  );
}

export default VideoCall;