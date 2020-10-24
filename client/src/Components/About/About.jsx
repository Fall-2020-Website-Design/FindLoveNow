import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import './About.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.css'
import Alex from '../../Images/Alex.png'
import YuBin from '../../Images/YuBin.png'
import Edgar from '../../Images/Edgar.png'
import Chrystal from '../../Images/Chrystal.png'
import LinkedIn from '../../Images/LinkedIn.png'
import GitHub from '../../Images/GitHub.svg'
import Email from '../../Images/Email.png'



export class About extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Container className="About-container" fuild>
                    <h1 className="About-color text-center my-auto">About Us</h1>
                    <hr />
                    <Row>
                        <Col>
                            <Form inline>
                                <p className="About-FindLoveNow-color mr-2" >FindLoveNow</p>
                                <p className="About-text">is a dating web application meant for helping people from all around the world, find their perfect match in love.</p>
                            </Form>
                        </Col>
                    </Row>
                    <hr />
                    <h1 className="About-color text-center my-auto">Developers</h1>
                    <hr />

                    <Row>
                        <Col md={4}>
                            <Image src={YuBin} className="About-image d-block mx-auto" />
                            <br />
                            <h5 className="About-text text-center">Yu Bin Liu (Jacky)</h5>
                        </Col>

                        <Col className="my-auto">
                            <Row className="my-auto">
                                <Col>
                                    <a href="https://github.com/JackyLiu97" rel="noopener noreferrer" target="_blank" >
                                        <Image src={GitHub} width="100" className="d-block mx-auto" />
                                    </a>
                                </Col>
                                <Col>
                                    <a href="https://www.linkedin.com/in/jacky-liu97" rel="noopener noreferrer" target="_blank" >
                                        <Image src={LinkedIn} width="100" className="responsive d-block mx-auto" />
                                    </a>
                                </Col>
                                <Col>
                                    <a href="mailto:Jackyliu977@gmail.com" rel="noopener noreferrer" target="_blank" >
                                        <Image src={Email} width="100" className="d-block mx-auto" />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col md={4}>
                            <Image src={Chrystal} className="About-image d-block mx-auto" />
                            <br />
                            <h5 className="About-text text-center">Chrystal Mingo</h5>
                        </Col>

                        <Col className="my-auto">
                            <Row className="my-auto">
                                <Col>
                                    <a href="https://github.com/chrystalmingo" rel="noopener noreferrer" target="_blank" >
                                        <Image src={GitHub} width="100" className="d-block mx-auto" />
                                    </a>
                                </Col>
                                <Col>
                                    <a href="https://www.linkedin.com/in/chrystalmingo" rel="noopener noreferrer" target="_blank" >
                                        <Image src={LinkedIn} width="100" className="responsive d-block mx-auto" />
                                    </a>
                                </Col>
                                <Col>
                                    <a href="mailto:Mingochrystal@gmail.com" rel="noopener noreferrer" target="_blank" >
                                        <Image src={Email} width="100" className="d-block mx-auto" />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col md={4}>
                            <Image src={Edgar} className="About-image d-block mx-auto" />
                            <br />
                            <h5 className="About-text text-center">Edgar Pineda</h5>
                        </Col>

                        <Col className="my-auto">
                            <Row className="my-auto">
                                <Col>
                                    <a href="https://github.com/edgarp2017" rel="noopener noreferrer" target="_blank" >
                                        <Image src={GitHub} width="100" className="d-block mx-auto" />
                                    </a>
                                </Col>
                                <Col>
                                    <a href="https://www.linkedin.com/in/edgar-pineda-torres" rel="noopener noreferrer" target="_blank" >
                                        <Image src={LinkedIn} width="100" className="responsive d-block mx-auto" />
                                    </a>
                                </Col>
                                <Col>
                                    <a href="mailto:epineda0313@gmail.com" rel="noopener noreferrer" target="_blank" >
                                        <Image src={Email} width="100" className="d-block mx-auto" />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col md={4}>
                            <Image src={Alex} className="About-image d-block mx-auto" />
                            <br />
                            <h5 className="About-text text-center">Jia Peng Zhen (Alex)</h5>
                        </Col>

                        <Col className="my-auto">
                            <Row className="my-auto">
                                <Col>
                                    <a href="https://github.com/alexzhen93" rel="noopener noreferrer" target="_blank" >
                                        <Image src={GitHub} width="100" className="d-block mx-auto" />
                                    </a>
                                </Col>
                                <Col>
                                    <a href="https://www.linkedin.com/in/jia-peng-zhen-6455a1170/" rel="noopener noreferrer" target="_blank" >
                                        <Image src={LinkedIn} width="100" className="responsive d-block mx-auto" />
                                    </a>
                                </Col>
                                <Col>
                                    <a href="mailto:Jiapengzhen@outlook.com" rel="noopener noreferrer" target="_blank" >
                                        <Image src={Email} width="100" className="d-block mx-auto" />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About
