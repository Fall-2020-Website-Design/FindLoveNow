import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
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
            image: require('../../Images/samplepicture.svg'),
            type: null,
            errors: [],
        };
    }
    static getDerivedStateFromProps (props, state) {
        const { profile, Name, pictures } = props;
        if (profile && pictures){
            const location = profile.Location.split(",");
            return {
            Name: Name,
            Age: profile.Age,
            Location: location[0].charAt(0).toUpperCase() + location[0].slice(1) + ", " + location[1].charAt(0).toUpperCase() + location[1].slice(1),
            Phrase: profile.Phrase, 
            image: pictures[0].data,
            type: pictures[0]    
        };}
    } 


    render() {
        
        return (
            <Col lg={4}>
                <Card className="profile-card mb-4">
                    <Card.Img variant="top" className="d-block" style={{ height: '100%' }} src={URL.createObjectURL(new Blob([Buffer.from(this.state.image)], {'type': this.state.type}))} rounded="true" />
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
