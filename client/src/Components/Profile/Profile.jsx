import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import './Profile.css'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from '../Footer/Footer'
import ProfileUser from './ProfileUser'
import ProfileAlbumandInf from './ProfileAlbumAndInf'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ProfileInf from './ProfileInf'

export class Profile extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Container fluid>
                    <Row className="p-4">
                        <ProfileUser />
                        <ProfileAlbumandInf />
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default Profile
