import React from "react";
import "./BlindDate.css";
import NavBar from "../NavBar/NavBar";
import BBImg from '../../Images/blindDate.png';
import BDate from '../../Images/Date.gif';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer'
export default class BlindDate extends React.Component {

  render() {
    return (
      <>
        <NavBar />
        <div className="CM_BD_padding">
        <div className="custom-container-BD">
        <div className="custom-container-BD-2">
        <center><img className="BD-img2" src={BDate}/></center>
        <center><img className="BD-img" src={BBImg}/></center>
        </div>
        </div>
        <center><h2 className="BB-SubHeader">Basic Preference:</h2></center>
            <center>
            <div className="BB-Selection">
            <label className="interest-BD">I’m Interested In:</label>
            <br></br>
            <select>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="both">Both</option>
            </select>
            </div>
          <Link to="/videocall">
          <center><button type="button" className="custom-button-cm-BD">
            Match Me!
          </button>
          </center>
           </Link>
          </center>
            </div>
            <Footer />
      </>
    );
  }
}