import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import './NavBar.css'
import { Link } from 'react-router-dom';
import FindaMatch from '../../Images/FindaMatch.svg'
import ChatImg from '../../Images/ChatImg.svg'
import BlindDate from '../../Images/BlindDateImg.svg'
import FilterMatches from '../../Images/FilterMatchesImg.svg'
import ProfileImg from '../../Images/ProfileImg.svg'

export class UserBar extends Component {
    render() {
        return (
            <Nav >
                <Form inline className="my-auto">
                    <Col />
                    <Link to="/Home">
                        <Image src={FindaMatch} id="FindaMatch" alt="Find a Match" width="35" className="d-block mx-auto" />
                        <Row className="NavBar-l3-color mx-auto">Find a Match</Row>
                    </Link>

                    <Col />
                    <Link to="/Chat">
                        <Image src={ChatImg} id="ChatImg" alt="Chat Image" width="39" className="d-block mx-auto" />
                        <Row className="NavBar-l3-color mx-auto">Chat</Row>
                    </Link>

                    <Col />
                    <Link to="/BlindDate">
                        <Image src={BlindDate} id="BlindDate" alt="Blind Date" width="35" className="d-block mx-auto" />
                        <Row className="NavBar-l3-color mx-auto">Blind Date</Row>
                    </Link>

                    <Col />
                    <Link to="/Fliter">
                        <Image src={FilterMatches} id="FilterMatches" alt="Filter Matches" width="35" className="d-block mx-auto" />
                        <Row className="NavBar-l3-color mx-auto">Filter Matches</Row>
                    </Link>

                    <Col />
                    <Link to="/Profile" className="mt-2">
                        <Image src={ProfileImg} id="ProfileImg" alt="Profile" width="35" className="d-block mx-auto" />
                        <Row className="NavBar-l3-color mx-auto">Profile</Row>
                    </Link>
                </Form>
            </Nav>
        )
    }
}

export default UserBar
