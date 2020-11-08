import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ProfileInf from './ProfileInf'
import { AuthContext } from "../../Context/authContext";
import ProfileDeck from './ProfileDeck'

export class ProfileAlbumandInf extends Component {
    render() {
        const { email, isAuthenicated, } = this.context
        return (
            <Col lg={8}>
                <ProfileDeck />
                <Row className="mt-4">
                    <ProfileInf />
                </Row>
            </Col>


        )
    }
}

export default ProfileAlbumandInf
