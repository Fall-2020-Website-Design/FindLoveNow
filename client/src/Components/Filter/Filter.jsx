import React from "react";
import FilterImg from '../../Images/filter.png';
import "./Filter.css";
import NavBar from "../NavBar/NavBar";
import * as API from "../../util/api"
import Footer from '../Footer/Footer'

import { AuthContext } from "../../Context/authContext";
import  Container from "react-bootstrap/Container";


import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

export default class Filter extends React.Component {
    static contextType = AuthContext;

    constructor (props) {
        super(props);
        this.state = {
            userID: null,
            gender: null,
            city: null,
            state: null,
            minAge: null,
            maxAge: null,
            feet: null,
            inches: null,
            errors: []
        }
    }

    componentDidMount () {
        setTimeout(() =>{
            const { userID } = this.context;
            this.setState({
                userID: userID
            });
            console.log(userID);
        }, 10)
    };

    // Handle field change
    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { userID, gender, city, state, minAge, maxAge, feet, inches } = this.state;
        console.log(userID);
        if (minAge <= maxAge) {
            API.setPreferences(userID, {
                gender,
                city,
                state,
                minAge,
                maxAge,
                feet,
                inches
            }).then((result) => {
                if (result.status === 200) {
                    alert("Preferences are now updated!");
                }
            })
            .catch((errors) => {
                this.setState({
                errors
                })
                alert("All fields must be filled out");
            })
        }
        else {
            alert("Invalid Age Range")
        }
    };

  render() {
      const ages = []
      for (let age=18; age <= 30; age++) {
        ages.push(<option key={age} value={age}>{age}</option>)
      }
      const distance = []
      for (let miles=1; miles <= 10; miles++) {
        distance.push(<option key={miles*10} value={miles*10}>{miles*10} miles</option>)
      }

    return (
        
        
        <div>
            < NavBar />
            <Container>
        <div className="filter-padding pt-4">
        <div className="custom-filter-container">
    <center><h1 className="Filter-Header">Filter Matches</h1></center>
            <h2 className="Filter-SubHeader">Basic Preferences:</h2>
            <hr className="Filter-Ruler"></hr>
            <div className="Filter-Selection">
            <label>I’m Interested In:</label>
            <select onChange={this.handleChange("gender")}>
                <option selected disabled>Choose Gender</option>
                <option value="male">Men</option>
                <option value="female">Women</option>
                <option value="both">Both</option>
            </select>
            </div>
            <div className="Filter-Submit">
            <label>City:</label>
            <input type="text" list="Location" onChange={this.handleChange("city")} />
            <label>State:</label>
            <input type="text" list="Location" onChange={this.handleChange("state")} />
            </div>
            <h2 className="Filter-SubHeader">More Preferences:</h2>
            <hr className="Filter-Ruler"></hr>
            <div className="Filter-Selection">
            <label>Age Range: (Min)</label>
            <select onChange={this.handleChange("minAge")}>
            <option selected disabled>Choose Min Age</option>
                {ages}
            </select>
            <label>Age Range: (Max)</label>
            <select onChange={this.handleChange("maxAge")}>
                <option selected disabled>Choose Max Age</option>
                {ages}
            </select>
            </div>

            <div className="Filter-Ethnicity">
         
                <label>Height:</label>
                
                <Form.Group>
                    <Form.Row>
                        
                        <Col>
                            <Form.Control type="number" placeholder="Feet" id="Height" max="6" min="4" onChange={this.handleChange("feet")} />
                        </Col>
                         <Col>
                            <Form.Control type="number" placeholder="Inches" id="Height" max="11" min="1" onChange={this.handleChange("inches")} />
                        </Col> 
                    </Form.Row>
                </Form.Group>
      
            </div>
            <hr className="Filter-Ruler"></hr>
            <center>
            <img className="FilterImg" src={FilterImg}/>
            </center>
            <div className="custom-spacing-btn-cm-f">
          <button type="button" className="custom-button-cm-f" onClick={this.handleSubmit}>
            Save
          </button>
          </div>




        </div>
        </div>
        </Container>
        <Footer />
        </div>
        
    );
  }
}
