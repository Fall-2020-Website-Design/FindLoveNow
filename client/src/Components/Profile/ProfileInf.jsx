import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { AuthContext } from "../../Context/authContext";

export class ProfileInf extends Component {
    static contextType = AuthContext
    render() {
        const { email, isAuthenicated, } = this.context
        return (
            <>
                <Col lg={6}>
                    <Card className="profileinf-card mb-4" >
                        <Card.Body>
                            <Card.Title className="profileinf-color text-center mt-4">Basic Information</Card.Title>
                            <Card.Text className="p-3 text-size">
                                 <Row />
                               <p>Name: Alex</p>
                                <Row />
                                <p>Age: 27</p>
                                <Row />
                                <p>Location: Brooklyn, New York</p>
                                <Row />
                                <p>I'm inerested in: Women</p>
                                <Row />
                                <p>Height: 6'0</p>
                                <Row />
                                <p>Education: CCNY '20</p>
                                <Row />
                                <p>I Love: Anime</p>
                                <Row />
                                <p>Work at: Apple Inc</p>
                            </Card.Text>
                            <center className="mb-4">
                                <Button bsPrefix="profileinf-button-color">EDIT</Button>
                            </center>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="profileinf-card">
                        <Card.Body>
                            <Card.Title className="profileinf-color text-center mt-4">Catch Phrase</Card.Title>
                            <Card.Text className="p-3 text-size"> If you like McDonald’s apple pie, we have a connection if you don’t, opposites attract.</Card.Text>
                            <center className="mb-4">
                                <Button bsPrefix="profileinf-button-color">EDIT</Button>
                            </center>
                        </Card.Body>
                    </Card>

                </Col>
            </>
        )
    }
}

export default ProfileInf
