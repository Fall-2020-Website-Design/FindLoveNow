import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import arrow from '../../Images/arrow.svg';

export class Arrows extends Component {    
    render() {
        return (
            <div>
                <Row>
                    <Col className="d-flex justify-content-between arrows" >
                        <Image id="left" alt="left" src={arrow} className="align-top left-arrow" onClick={this.props.prev} fluid />
                        <Image id="right" alt="right" src={arrow} className="align-top right-arrow" onClick={this.props.next} fluid />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Arrows;