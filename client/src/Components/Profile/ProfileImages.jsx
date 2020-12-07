import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './Profile.css'

export class ProfileImages extends Component {
    

    render() {
        console.log(this.props.imageID);
        return (
            <Card style={{ maxWidth: '25%' }} rounderd="true">
                <button type="button" class="close" aria-label="Close" onClick={() => {this.props.delete(this.props.imageID)}}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <Card.Img variant="top" className="image-deck d-block" style={{ height: '100%' }} rounderd="true"
                    src={URL.createObjectURL(new Blob([Buffer.from(this.props.image)], { 'type': this.props.type }))} />
            </Card>
        )
    }
}

export default ProfileImages
