import React, { Component, useState, useEffect, useRef } from 'react';
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
import location_image from '../../Images/location.svg';
import sample_picture from '../../Images/samplepicture.svg'; // just a place holder for now
import Bar from './Bar';
import Arrows from './Arrows';
import Images from './Images';

import 'bootstrap/dist/css/bootstrap.css';
import "./Matches.css";

export default class Matches extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentPicture: 0,
          name: "John",
          age: 25,
          bio: "Human Resources at CitiBank",
          miles: 20,
          images: [sample_picture,
            'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
            'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
            'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
            'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80']
        };
    }

    handleToUpdate = (index) => {
        this.setState({
            currentPicture:index
        });
    }

    nextImage = () => {
        this.setState({
            currentPicture: this.state.currentPicture === this.state.images.length-1 ? 0 : this.state.currentPicture + 1
        })
    }

    prevImage = () => {
        this.setState({
            currentPicture: this.state.currentPicture === 0 ? this.state.images.length-1 : this.state.currentPicture - 1
        })
    }

    render() {

        return (
            <div>
                <NavBar />
                <Container fluid>
                    <Col className="align-self-ceneter">
                        <Card className="matches-card">
                            <Card.Body>
                                <Bar total={this.state.images.length} current={this.state.currentPicture} click={this.handleToUpdate} />

                                <Arrows prev={this.prevImage} next={this.nextImage}/>

                                <Images image={this.state.images[this.state.currentPicture]} />

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