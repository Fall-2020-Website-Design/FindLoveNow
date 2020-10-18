import React, { Component } from 'react'
import logoImg from '../../Images/logo.svg'
import heartImg from '../../Images/heart.svg'
import heartImg2 from '../../Images/heart2.svg'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.css'
import NonUserBar from './NonUserBar'



export class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="sm" bg="light" className="justify-content-between container-fluid">
                <Form inline>
                    <Navbar.Brand href={`/`}>
                        <Image src={heartImg2} className="Heart-Logo2" id="Heart2" alt="Heart Logo 2" width="50" />
                        <Image src={heartImg} className="Heart-Logo" id="Heart" alt="Heart Logo" width="50" />
                        <Image src={logoImg} className="Love-Logo" id="FindLoveNow" alt="Find Love Logo" width="180" />
                    </Navbar.Brand>
                </Form>

                <Form >
                    <NonUserBar />
                </Form>
            </Navbar>
        )
    }
}

export default NavBar
