import React from "react";
import "./Home.css";
import NavBar from "../NavBar/NavBar";
import { Link } from 'react-router-dom';
import Love from '../../Images/love.svg';
import Logo from '../Animation/Logo';
import Welcome from '../Animation/Welcome';
import Footer from '../Footer/Footer';
import heartImg from '../../Images/heart.svg';
export default class Home extends React.Component {

  render() {
    return (
      <>
        <NavBar />
        <div className="background-home">
        <div class="row-home">
            <h1 style={{fontFamily:"Snell Roundhand, cursive", fontSize:"30px"}} className="centered2"><Welcome/></h1>
            <h1 className="centered"><Logo/></h1>
          <div class="column-home2">
          <center><img className="home-image" src={Love}/></center>
          <center><h3 style={{fontSize:"10px"}} className="position1">we are here to help you </h3></center>
          <center><h3 style={{fontFamily:"Snell Roundhand, cursive", fontSize:"20px"}} className="position2">find your perfect match  <img style={{width:"10px", height:"10px" }} src={heartImg}/></h3></center>
          </div>
        </div>
        <div className="white-bg"><Footer /></div>
        </div>

      </>
    );
  }
}