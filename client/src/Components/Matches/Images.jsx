import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './Matches.css';

export class Images extends Component {

    constructor(props) {
        super(props);
      
        this.state = { 
            image: null,
        };     
    }

    static getDerivedStateFromProps (props, state) {
        const { image } = props;
        
        if (image) {
            return {
                image: URL.createObjectURL(new Blob([Buffer.from(image.data)], {'type': image})),
            }
        }
        return null;
    } 

    render() {
        const { image } = this.state;

        return (
            <div>
                <Row className="justify-content-md-center">
                    <Col>
                        <Image src={image} className="card-img" style={{height:"37rem"}}  />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Images
