import React, { Component } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Alex from '../../Images/Alex.png'
import abc from '../../Images/abc.jpg'
import YuBin from '../../Images/YuBin.png'
import Chrystal from '../../Images/Chrystal.png'


export class ProfileDeck extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" className="image-deck d-block" style={{height: '100%' }} src={abc} rounded/>
                    </Card>
                    <Card>
                        <Card.Img variant="top" className="image-deck d-block" style={{height: '100%' }} src={Alex} rounded/>
                    </Card>
                    <Card>
                        <Card.Img variant="top" className="image-deck d-block" style={{height: '100%' }} src={YuBin} rounded/>
                    </Card>
                    <Card>
                        <Card.Img variant="top" className="image-deck d-block" style={{height: '100%' }} src={Chrystal} rounded/>
                    </Card>
                </CardDeck>
                
            </div>
        )
    }
}

export default ProfileDeck
