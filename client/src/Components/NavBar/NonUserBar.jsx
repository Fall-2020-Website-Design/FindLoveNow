import React, { Component } from 'react'
import { Badge, Nav } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import './NavBar.css'


export class NonUserBar extends Component {
    render() {
        return (
            <Nav className="justify-content-between">
                <Form inline >
                    <Nav.Link className="mr-4" href={`About`} inline><div className="l2-color">About</div></Nav.Link>
                </Form>

                <Form inline className="b-color">
                    <Nav.Link href={`Login`}><div className="l-color">Login</div></Nav.Link>
                    <div className="l-color">|</div>
                    <Nav.Link href={`Register`}><div className="l-color">Sign Up</div></Nav.Link>
                </Form>
            </Nav>
        )
    }
}

export default NonUserBar
