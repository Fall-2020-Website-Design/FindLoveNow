import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Alex from '../../Images/Alex.png'
import Row from 'react-bootstrap/Row'
import ProfileInf from './ProfileInf'


export class ProfileAlbumandInf extends Component {
    render() {
        return (
            <Col>
                <CardDeck>
                    <Card style={{ width: '20rem' }} >
                        <Card.Img variant="top" src={Alex} />
                    </Card>
                    <Card style={{ width: '20rem' }} >
                        <Card.Img variant="top" src={Alex} />
                    </Card>
                    <Card style={{ width: '20rem' }} >
                        <Card.Img variant="top" src={Alex} />
                    </Card>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={Alex} />
                    </Card>
                </CardDeck>

                <Row className="mt-4">
                    <ProfileInf />
                </Row>
            </Col>


        )
    }
}

export default ProfileAlbumandInf
