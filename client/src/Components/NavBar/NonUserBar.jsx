import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import './NavBar.css'
import { Link } from 'react-router-dom';


export class NonUserBar extends Component {
    render() {
        return (
            <Nav fluid>
                <Form inline >
                    <Link to="/About" className=" nav-link mr-4" inline>
                        <div className="NavBar-l2-color">
                            About</div>
                    </Link>
                </Form>

                <Form inline className="NavBar-b-color">
                    <Link to="/Login">
                        <div className="NavBar-l-color">Login
                        </div>
                    </Link>
                    <div className="NavBar-l-color">|</div>
                    <Link to="/Register">
                        <div className="NavBar-l-color">Register
                        </div>
                    </Link>
                </Form>
            </Nav>
        )
    }
}

export default NonUserBar
