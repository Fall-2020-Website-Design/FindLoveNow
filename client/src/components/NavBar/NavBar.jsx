import React, { Component } from 'react'
import logoImg from '../../Image/logo.svg';
import './NavBar.css'
import {
    Navbar,
    NavbarBrand,
    Button,
    Form,
    FormControl

} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
                <NavbarBrand className="mr-auto">
                    <Link to={`/`}>
                        <img src={logoImg} className="Love-Logo" id="FindLoveNow" alt="Find Love Logo" width={200} />
                    </Link>
                </NavbarBrand>
                <Form inline>
                    <Link to={`About`} className="l2-color mr-sm-2">
                        About Us
                    </Link>
                    <Button className="b-color">
                        <Link to={`Login`} className="l-color mr-sm-2">
                            Login
                        </Link>
                         | 
                        <Link to={`Register`} className="l-color ml-sm-2">
                            Register
                            </Link>
                    </Button>
                </Form>
            </Navbar>
        )
    }
}

export default NavBar
