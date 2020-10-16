import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import NavBar from '../NavBar/NavBar';
import checkmark_image from '../../Images/checkmark.svg';
import x_image from '../../Images/x.svg';
import previous_image from '../../Images/prev.svg';
import "./Matches.css";

export default class Matches extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentPicture: 1,
          totalPictures: 5,
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
                                    <Col>
                                        
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        
                        <Row className="btn-row pt-4 pl-4">
                            <Col>
                                <Button variant="secondary" className="btn-circle-xl btn-xl ml-5 btn-check mr-2">
                                    <Image alt="" src={checkmark_image} className="d-inline-block align-top" fluid />
                                </Button>
                            </Col>

                            <Col className="pt-3 pl-5">
                                <Button variant="secondary" className="btn-circle-sm btn-sm">
                                    <Image alt="" src={previous_image} className="d-inline-block align-top pt-1" fluid />
                                </Button>
                            </Col>

                            <Col>
                                <Button variant="secondary" className="btn-circle-xl btn-xl mr-5">
                                    <Image alt="" src={x_image} className="d-inline-block align-top" fluid />
                                </Button>
                            </Col>
                            
                            
                        </Row>
                    </Col>
                </Container>
            </div>
        )
    }
}
