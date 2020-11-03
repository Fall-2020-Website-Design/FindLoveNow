import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import './Profile.css'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from '../Footer/Footer'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Alex from '../../Images/Alex.png'
import Image from 'react-bootstrap/Image'
import Location from '../../Images/location.svg'

export class Profile extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="pt-4 pb-4 ml-2">
                    <Col md={4}>
                        <Card style={{ width: '35rem'}} className="profile-card">
                            <Card.Img variant="top" src={Alex} />
                            <Card.Body className="mt-4 mb-4">
                                <Card.Title className="ml-4 title-size">Alex, 27</Card.Title>
                                <Card.Text className="ml-4 text-size">
                                    I'm goofy and love puppies
                                </Card.Text>
                                    <Image src={Location} className="ml-4"/>
                                    Brooklyn, NY
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Profile
