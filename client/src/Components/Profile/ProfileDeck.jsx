import React, { Component } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import add from '../../Images/add.svg'


export class ProfileDeck extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <Card className="image-upload-profile">
                        <label for="file-input">
                            <Card.Img variant="top" className="image-deck d-block" style={{ height: '100%' }} src={add} rounded />
                        </label>
                        <input id="file-input" type="file" />
                    </Card>

                    <Card className="image-upload-profile">
                        <label for="file-input">
                            <Card.Img variant="top" className="image-deck d-block" style={{ height: '100%' }} src={add} rounded />
                        </label>
                        <input id="file-input" type="file" />
                    </Card>

                    <Card className="image-upload-profile">
                        <label for="file-input">
                            <Card.Img variant="top" className="image-deck d-block" style={{ height: '100%' }} src={add} rounded />
                        </label>
                        <input id="file-input" type="file" />
                    </Card>

                    <Card className="image-upload-profile">
                        <label for="file-input">
                            <Card.Img variant="top" className="image-deck d-block" style={{ height: '100%' }} src={add} rounded />
                        </label>
                        <input id="file-input" type="file" />
                    </Card>
                </CardDeck>

            </div>
        )
    }
}

export default ProfileDeck
