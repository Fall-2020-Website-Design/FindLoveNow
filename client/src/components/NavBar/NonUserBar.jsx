import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import NavBar from './NavBar'
import './NavBar.css'


export class NonUserBar extends Component {
    render() {
        return (
            <Nav>
                <Nav.Link href={`About`} inline><p className="l2-color">About</p></Nav.Link>
            </Nav>
        )
    }
}

export default NonUserBar
