import React, { Component } from 'react'
import logoImg from '../../Image/logo.svg'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.css'
import NonUserBar from './NonUserBar'
import UserBar from './UserBar'


export class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" >
                <Navbar.Brand href={`/`}>
                    <img
                        alt=""
                        src={logoImg}
                        width="200"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                About
            </Navbar.Brand>
            </Navbar>

            // <Navbar collapseOnSelect expand="sm" bg-="light" className="align-text-bottom">
            //     <Form inline>
            //         <Navbar.Brand href={`/`}>
            //             <Image src={logoImg} className="Love-Logo" id="FindLoveNow" alt="Find Love Logo" width={200} />
            //         </Navbar.Brand>
            //     </Form>
            //     <Form inlne className="">
            //         <NonUserBar/>
            //     </Form>
            // </Navbar>
        )
    }
}

export default NavBar
