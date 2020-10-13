import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar/NavBar';
import checkmark from '../../Image/download.png';
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
                                <Button variant="secondary" className="btn-circle-xl btn-xl ml-5 btn-check">
                                    <Image className="checkmark-img" scr={checkmark} width={100} height="100px" fluid />
                                </Button>
                            </Col>

                            <Col className="pt-3 pl-5">
                                <Button variant="secondary" className="btn-circle-sm btn-sm">Prev</Button>
                            </Col>

                            <Col>
                                <Button variant="secondary" className="btn-circle-xl btn-xl mr-5">X</Button>
                            </Col>
                            
                            
                        </Row>
                    </Col>
                </Container>
            </div>
        )
    }
}
