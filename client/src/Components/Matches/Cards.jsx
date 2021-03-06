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
            userID: null,
            currentPicture: 0,
            total: 0,
            name: "name",
            age: "age",
            bio: "phrase",
            location: "location",
            height: 0,
            education: "N\\A",
            images: []
        };     
    }

    static getDerivedStateFromProps (props, state) {
        const { profile, pictures, name } = props;
        
            if (profile) {
                return {
                    userID: profile.userID,
                    name: name,
                    total: pictures.length,
                    images: pictures,
                    age: profile.Age,
                    location: profile.Location,
                    height: profile.Height,
                    education: (profile.Education !== null)?state.education:profile.Education,
                    bio: profile.Phrase
                };
            }
            return null;
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
        const { bio, total, images, location, age, name, currentPicture, height, education } = this.state;

        return (
            <div>
                <Col className="d-inline-flex justify-content-center pt-4">
                    <Card className="matches-card">
                        <Card.Body className="card-body">
                            <Bar total={total} current={currentPicture} click={this.handleToUpdate} />

                            <Arrows prev={this.prevImage} next={this.nextImage}/>

                            <Images image={images[currentPicture]} className="d-inline-flex justify-content-center " />

                            <Col className="info" >
                                <Row className="name-age"> { name }, { age } - { `${Math.floor(height/12)}'${height%12}` } </Row>
                                <Row className="edu"> Education: { education } </Row>
                                <Row className="bio"> Phrase: { bio } </Row> 
                            </Col>  

                            <div className="location">
                                <Row>
                                    <Image alt="" src={location_image} /> Location: { location }
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
