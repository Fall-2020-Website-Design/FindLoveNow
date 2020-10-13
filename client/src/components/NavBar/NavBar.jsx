import React, { Component } from 'react'
import logoImg from '../../Image/logo.svg'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.css'
import NonUserBar from './NonUserBar'
import UserBar from './UserBar'


export class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="sm" bg-="light">
                <Navbar.Brand href={`/`}>
                    <Image src={logoImg} className="Love-Logo" id="FindLoveNow" alt="Find Love Logo" width={200} />
                </Navbar.Brand>
                {
                    <NonUserBar />
                }
            </Navbar>
        )
    }
}

export default NavBar
