import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Alex from '../../Images/Alex.png'
import Image from 'react-bootstrap/Image'
import Location from '../../Images/location.svg'
import { AuthContext } from "../../Context/authContext";


export class ProfileUser extends Component {
    static contextType = AuthContext
    constructor(props) {
        super(props);
        this.state = {
            Name: null,
            Age: null,
            Location: null,
            Phrase: null,
            errors: [],
        };
    }
    static getDerivedStateFromProps (props, state) {
        const { profile, Name } = props;
        if (profile){return {
            Name: Name,
            Age: profile.Age,
            Location: profile.Location,
            Phrase: profile.Phrase     
        };}
    } 


    render() {
        
        return (
            <Col lg={4}>
                <Card className="profile-card mb-4">
                    <Card.Img variant="top" className="image-deck d-block" style={{ height: '100%' }} src={Alex} rounded />
                    <Card.Body className="p-4">
                    <Card.Title className="title-size">{this.state.Name}, {this.state.Age}</Card.Title>
                        <Card.Text className="text-size text-muted">
                            {this.state.Phrase}
                    </Card.Text>
                        <div className="text-size text-muted">
                            <Image src={Location} />
                        {this.state.Location}
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default ProfileUser
