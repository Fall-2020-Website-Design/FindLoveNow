import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import checkmark_image from '../../Images/checkmark.svg';
import x_image from '../../Images/x.png';
import previous_image from '../../Images/prev.svg';

export class Buttons extends Component {
    render() {
        return (
            <div>
                <Col className="d-inline-flex justify-content-center">
                    <Row className="d-inline-flex justify-content-center btn-row pt-4 pl-4">
                        <Col>
                            <Button variant="secondary" className="btn-circle-xl btn-xl ml-5 btn-check mr-2" onClick={this.props.accept} >
                                <Image alt="" src={checkmark_image} className=" align-top" fluid />
                            </Button>
                        </Col>

                        <Col className="pt-3 pl-5">
                            <Button variant="secondary" className="btn-circle-sm btn-sm" onClick={this.props.prev} >
                                <Image alt="" src={previous_image} className="align-top pt-1" fluid />
                            </Button>
                        </Col>

                        <Col>
                            <Button variant="secondary" className="btn-circle-xl btn-xl mr-5" onClick={this.props.reject} >
                                <Image alt="" src={x_image} className="align-top" fluid />
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </div>
        )
    }
}

export default Buttons
