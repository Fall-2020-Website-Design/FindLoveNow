import React from "react";
import "./Home.css";
import NavBar from "../NavBar/NavBar";
import BBImg from '../../Images/blindDate.png';
import BDate from '../../Images/Date.gif';
import { Link } from 'react-router-dom';
export default class Home extends React.Component {

  render() {
    return (
      <>
        <NavBar />
        <div>
            <h1>Hello World</h1>
            <h1>This is a work in progress</h1>
        </div>
      </>
    );
  }
}