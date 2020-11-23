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
        const {profile, images} = this.props;
        this.state = { 
            currentPicture: 0,
            name: profile.name,
            age: profile.Age,
            bio: profile.Phrase,
            location: profile.Location,
            images: images
        };     
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
        const { bio, images, location, age, name, currentPicture } = this.state;

        return (
            <div>
                <Col className="d-inline-flex justify-content-center pt-4">
                    <Card className="matches-card">
                        <Card.Body className="card-body">
                            <Bar total={images.length} current={currentPicture} click={this.handleToUpdate} />

                            <Arrows prev={this.prevImage} next={this.nextImage}/>

                            <Images image={images[currentPicture]} className="d-inline-flex justify-content-center " />

                            <Col className="info" >
                                <div className="name-age"> { name }, { age } </div>
                                <div className="bio"> { bio } </div> 
                            </Col>  

                            <div className="location">
                                <Row>
                                    <Image alt="" src={location_image} /> { location }
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
