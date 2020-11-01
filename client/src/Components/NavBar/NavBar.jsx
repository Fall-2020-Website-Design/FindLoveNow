import React, { Component } from 'react'
import logoImg from '../../Images/logo.svg'
import heartImg from '../../Images/heart.svg'
import heartImg2 from '../../Images/heart2.svg'
import './NavBar.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import NonUserBar from './NonUserBar'
import UserBar from './UserBar'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'
import { AuthContext } from "../../Context/authContext";
import Logo from '../Animation/Logo'

export class NavBar extends Component {
    static contextType = AuthContext

    render() {
        const { userID, email, isAuthenicated, LogoutUser } = this.context
        return (
            <Navbar collapseOnSelect expand="md" bg="light" className="justify-content-between">
                <Navbar.Brand>
                    <Link to="/Home">
                        <Image src={heartImg2} className="Heart-Logo2" id="Heart2" alt="Heart Logo 2" width="40" />
                        <Image src={heartImg} className="Heart-Logo" id="Heart" alt="Heart Logo" width="40"  />
                        <Logo />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse >
                    <Nav className="mr-auto" />
                    {isAuthenicated ? <UserBar email={email}/> : <NonUserBar />}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar
