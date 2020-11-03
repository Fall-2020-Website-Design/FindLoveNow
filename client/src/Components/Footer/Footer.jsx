import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';
import './Footer.css'


export class Footer extends Component {
    render() {
        return (
            <footer className="footer-size mt-5">
                <Container fluid bg="light">
                    <Row className="border-top justify-content-md-center p-3">
                        <Col md="auto">
                            © 2020 
                        </Col>
                        <Col md="auto">
                        <Link to="/About" className="Contact-color">
                            Contact Us
                        </Link>
                        </Col>

                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer
