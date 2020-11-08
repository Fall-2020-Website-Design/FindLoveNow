import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Alex from '../../Images/Alex.png'
import Image from 'react-bootstrap/Image'
import Location from '../../Images/location.svg'

export class ProfileUser extends Component {
    render() {
        return (
            <Col md="auto">
                <Card style={{ width: '35rem' }} className="profile-card">
                    <Card.Img variant="top" src={Alex} />
                    <Card.Body className="p-4">
                        <Card.Title className="title-size">Alex, 27</Card.Title>
                        <Card.Text className="text-size">
                            I'm goofy and love puppies
                    </Card.Text>
                        <Image src={Location} />
                        Brooklyn, NY
                </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default ProfileUser
