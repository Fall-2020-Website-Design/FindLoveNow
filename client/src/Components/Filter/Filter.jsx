import React from "react";
import FilterImg from '../../Images/filter.png';
import "./Filter.css";

import { Link } from "react-router-dom";


export default class Filter extends React.Component {

  render() {
    return (
        
        <div>
            <h1>NavBar needed</h1>
        <div className="filter-padding">
        <div className="custom-filter-container">
            <center><h1 className="Filter-Header">Filter Matches</h1></center>
            <h2 className="Filter-SubHeader">Basic Preferences:</h2>
            <hr className="Filter-Ruler"></hr>
            <div className="Filter-Selection">
            <label>I’m Interested In:</label>
            <select>
                    <option value="Gender">Men</option>
                    <option>Women</option>
                    <option>Both</option>
            </select>
            </div>
            <div className="Filter-Submit">
            <form>
            <label>My Neighborhood:</label>
            <br></br>
            <input type="text" list="Location" />
                <datalist id="Location">
                    <option>Current Location</option>
                    <option>Manhattan, NY</option>
                </datalist>
            </form>
            </div>
            <h2 className="Filter-SubHeader">More Preferences:</h2>
            <hr className="Filter-Ruler"></hr>
            <div className="Filter-Selection">
            <label>Age Range: (Min)</label>
                <select>
                    <option value="Gender">Min</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
            </select>
            <label>Age Range: (Max)</label>
            <select>
                    <option value="Gender">Max</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
            </select>
            </div>
            <div className="Filter-Submit">
            <form>
            <label>Max Distance:</label>
            <br></br>
            <input type="text" list="Distance" />
                <datalist id="Distance">
                    <option>10 miles</option>
                    <option>20 miles</option>
                </datalist>
            </form>
            </div>
            <div className="Filter-Height">
            <form>
            <label>Height:</label>
            <br></br>
            <input type="text" list="Height" />
                <datalist id="Height">
                    <option>3'9+</option>
                    <option>4'5+</option>
                    <option>5'9+</option>
                    <option>6'5+</option>
                </datalist>
            </form>
            </div>
            <div className="Filter-Ethnicity">
            <label>Ethnicity:</label>
            <select>
                    <option value="Ethnicity">No Preferences</option>
                    <option>American Indian or Alaska Native</option>
                    <option>Asian</option>
                    <option>Black or African American</option>
                    <option>Hispanic or Latino</option>
                    <option>Native Hawaiian or Other Pacific Islander.</option>
                    <option>White</option>
            </select>
            </div>
            <hr className="Filter-Ruler"></hr>
            <center>
            <img className="FilterImg" src={FilterImg}/>
            </center>
            <div className="custom-spacing-btn-cm-f">
          <button type="button" className="custom-button-cm-f">
            Save
          </button>
          </div>




        </div>
        </div>
        </div>
    );
  }
}
