import React, { Component } from 'react';
import Bar from './Bar';
import Arrows from './Arrows';
import Images from './Images';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Image from 'react-bootstrap/Image';
import location_image from '../../Images/location.svg';

export class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            currentPicture: this.props.user.currentPicture,
            name: this.props.user.name,
            age: this.props.user.age,
            bio: this.props.user.bio,
            miles: this.props.user.miles,
            images: this.props.user.images,
            width: 0
        }     
    }
    
    handleToUpdate = (index) => {
        this.setState({
            currentPicture: index
        });
    }

    nextImage = () => {
        this.setState({
            currentPicture: this.state.currentPicture === this.state.images.length-1 ? 0 : this.state.currentPicture + 1
        });
    }

    prevImage = () => {
        this.setState({
            currentPicture: this.state.currentPicture === 0 ? this.state.images.length-1 : this.state.currentPicture - 1
        });
    }

    render() {
        return (
            <div>
                <Col className="d-inline-flex justify-content-center pt-4">
                    <Card className="matches-card">
                        <Card.Body className="card-body">
                            <Bar total={this.state.images.length} current={this.state.currentPicture} click={this.handleToUpdate} />

                            <Arrows prev={this.prevImage} next={this.nextImage}/>

                            <Images image={this.state.images[this.state.currentPicture]} className="d-inline-flex justify-content-center " />

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
                </Col>
            </div>
        )
    }
}

export default Cards
