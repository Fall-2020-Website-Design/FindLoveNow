import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './Matches.css';

export class Images extends Component {

    render() {
        return (
            <div>
                <Row className="justify-content-md-center">
                    <Col>
                        <Image src={this.props.image} className="card-img" />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Images
