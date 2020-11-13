import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import './About.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import Footer from '../Footer/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import Alex from '../../Images/Alex.png'
import YuBin from '../../Images/YuBin.png'
import Edgar from '../../Images/Edgar.png'
import Chrystal from '../../Images/Chrystal.png'
import LinkedIn from '../../Images/LinkedIn.png'
import GitHub from '../../Images/GitHub.svg'
import Email from '../../Images/Email.png'
import Logo from '../Animation/Logo';
import heartImg from '../../Images/heart.svg';



export class About extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="pt-4 pb-4">
                    <Container className="About-container">
                        <h1 className="About-color text-center my-auto">About Us</h1>
                        <hr className="About-Ruler"/>
                        <Row>
                            <Col>
                                <Form inline>
                                <center><img style={{width:"30px", height:"30px"}} src={heartImg}/><Logo/>
                                <br/>
                                    <p className="About-text">FindLoveNow was created in 2020, as a final project for CSC 47300, Website Design, at City College. The purpose of this web application called FindLoveNow is to help adults from all around the world, find their perfect match in love.</p>
                                </center>
                                </Form>
                            </Col>
                        </Row>
                        <hr className="About-Ruler"/>
                        <h1 className="About-color text-center my-auto">Developers</h1>
                        <hr className="About-Ruler"/>
                        <center>
                        <Row>
                            <Col md={5}>
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
                        <hr className="about-transition-ruler"/>
                        
                        <Row>
                            <Col md={5}>
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
                        <hr className="about-transition-ruler"/>
                        
                        <Row>
                            <Col md={5}>
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
                        <hr className="about-transition-ruler"/>

                        <Row>
                            <Col md={5}>
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
                        </center>
                    </Container>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About
