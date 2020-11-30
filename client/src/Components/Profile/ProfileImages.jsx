import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './Profile.css'

export class ProfileImages extends Component {


    render() {
        return (
            <Card>
                <button type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <Card.Img variant="top" className="image-deck d-block" style={{ height: '100%' }} rounderd="true"
                    src={URL.createObjectURL(new Blob([Buffer.from(this.props.image)], { 'type': this.props.type }))} />
            </Card>
        )
    }
}

export default ProfileImages
