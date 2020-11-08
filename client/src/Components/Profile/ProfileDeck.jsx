import React, { Component } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Alex from '../../Images/Alex.png'

export class ProfileDeck extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={Alex} />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Alex} />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Alex} />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Alex} />
                    </Card>
                </CardDeck>
                
            </div>
        )
    }
}

export default ProfileDeck
