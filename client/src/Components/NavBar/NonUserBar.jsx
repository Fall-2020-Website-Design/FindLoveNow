import React, { Component } from 'react'
import { Badge, Nav } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import './NavBar.css'


export class NonUserBar extends Component {
    render() {
        return (
            <Nav fluid>
                <Form inline >
                    <Nav.Link className="mr-4" href={`About`} inline><div className="NavBar-l2-color">About</div></Nav.Link>
                </Form>

                <Form inline className="NavBar-b-color">
                    <Nav.Link href={`Login`}><div className="NavBar-l-color">Login</div></Nav.Link>
                    <div className="NavBar-l-color">|</div>
                    <Nav.Link href={`Register`}><div className="NavBar-l-color">Sign Up</div></Nav.Link>
                </Form>
            </Nav>
        )
    }
}

export default NonUserBar
