import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import NavBar from '../NavBar/NavBar';
import checkmark_image from '../../Images/checkmark.svg';
import x_image from '../../Images/x.png';
import previous_image from '../../Images/prev.svg';
import arrow from '../../Images/arrow.svg';
import location_image from '../../Images/location.svg';
import sample_picture from '../../Images/samplepicture.svg'; // just a place holder for now
import 'bootstrap/dist/css/bootstrap.css';
import "./Matches.css";

export default class Matches extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentPicture: 1,
          totalPictures: 5,
          name: "John",
          age: 25,
          bio: "Human Resources at CitiBank",
          miles: 20
        };
    }
s
    render() {
        return (
            <div>
                <NavBar />
                <Container>
                    <Col className="card-col">
                        
                        <Card className="matches-card">
                            <Card.Body>
                                <Row>
                                    <Col className="d-flex justify-content-between arrows" >
                                        <Image alt="" src={arrow} className="align-top right-arrow" fluid />
                                        <Image alt="" src={arrow} className="align-top" fluid />
                                    </Col>
                                </Row>

                                <Row className="justify-content-md-center">
                                    <Col>
                                        <Image src={sample_picture} className="card-img" />
                                    </Col>
                                </Row>

                                <Col className="info" >
                                    <div className="name-age"> {this.state.name}, {this.state.age} </div>
                                    <div className="bio"> {this.state.bio} </div> 
                                </Col>  

                                <div className="location">
                                    <Row>
                                        <Image alt="" src={location_image} /> {this.state.miles} miles away
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                        
                        <Row className="btn-row pt-4 pl-4">
                            <Col>
                                <Button variant="secondary" className="btn-circle-xl btn-xl ml-5 btn-check mr-2">
                                    <Image alt="" src={checkmark_image} className=" align-top" fluid />
                                </Button>
                            </Col>

                            <Col className="pt-3 pl-5">
                                <Button variant="secondary" className="btn-circle-sm btn-sm">
                                    <Image alt="" src={previous_image} className="align-top pt-1" fluid />
                                </Button>
                            </Col>

                            <Col>
                                <Button variant="secondary" className="btn-circle-xl btn-xl mr-5">
                                    <Image alt="" src={x_image} className="align-top" fluid />
                                </Button>
                            </Col>
                            
                            
                        </Row>
                    </Col>
                </Container>
            </div>
        )
    }
}
