import React, { Component } from 'react'
import logoImg from '../../Images/logo.svg'
import heartImg from '../../Images/heart.svg'
import heartImg2 from '../../Images/heart2.svg'
import './NavBar.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import NonUserBar from './NonUserBar'
import 'bootstrap/dist/css/bootstrap.css'


export class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="light" className="justify-content-between">

                <Navbar.Brand href={`/`}>
                    <Image src={heartImg2} className="Heart-Logo2" id="Heart2" alt="Heart Logo 2" width="40" fluid />
                    <Image src={heartImg} className="Heart-Logo" id="Heart" alt="Heart Logo" width="40" fluid />
                    <Image src={logoImg} className="Love-Logo" id="FindLoveNow" alt="Find Love Logo" width="200" fluid />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse fluid>
                    <Nav className="mr-auto" />
                    <NonUserBar />
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar
