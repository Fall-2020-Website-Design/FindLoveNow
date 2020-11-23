import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import { AuthContext } from "../../Context/authContext";
import * as API from "../../util/api";

export class ProfileInf extends Component {
    static contextType = AuthContext
    constructor(props) {
        super(props);
        this.state = {
            userID: null,
            Name: null,
            Age: null,
            Gender: null,
            City: null,
            States: null,
            Interested: null,
            Height: null,
            Education: null,
            Hobby: null,
            Work: null,
            Phrase: null,
            errors: [],
        };
    }

    componentDidMount() {
        setTimeout(() => {
            const { userID } = this.context;
            this.setState({
                userID: userID
            }, () => this.getUserName(userID));

        }, 5)
        console.log(this.state)
    }

    getUserName = (id) => {
        API.getName(id).then((result) => {
            if (result.status === 200) {
                this.setState({
                    Name: result.data
                })
            }
        }).catch((errors) => {
            this.setState({
                errors
            })
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { Age, Gender, City, States, Interested, Height, Education, Hobby, Work } = this.state;

    };

    handleSubmitPhrase = (e) => {
        e.preventDefault();
        const { Phrase } = this.state;

    };

    handleEdit = (e) => {
        e.preventDefault();
        this.setState({ edit: !this.state.edit });
    };

    handleEditPhrase = (e) => {
        e.preventDefault();
        this.setState({ editPhrase: !this.state.editPhrase });
    };

    render() {
        const { email, isAuthenicated, } = this.context
        return (
            <>
                <Col lg={6}>
                    {!this.state.edit &&
                        (
                            <Card className="profileinf-card mb-4" >
                                <Card.Body>
                                    <Card.Title className="profileinf-color text-center mt-4">Basic Information</Card.Title>
                                    <Card.Text className="p-3 text-size">
                                        <Row />
                                        <p>Name: {this.state.Name} </p>
                                        <Row />
                                        <p>Age: 27</p>
                                        <Row />
                                        <p>Location: Brooklyn, New York</p>
                                        <Row />
                                        <p>I'm inerested in: Women</p>
                                        <Row />
                                        <p>Height: 6'0</p>
                                        <Row />
                                        <p>Education: CCNY '20</p>
                                        <Row />
                                        <p>I Love: Anime</p>
                                        <Row />
                                        <p>Work at: Apple Inc</p>
                                    </Card.Text>
                                    <center className="mb-4">
                                        <Button bsPrefix="profileinf-button-color" onClick={this.handleEdit}>EDIT</Button>
                                    </center>
                                </Card.Body>
                            </Card>
                        )}
                    {this.state.edit &&
                        (
                            <Card className="profileinf-card mb-4" >
                                <Card.Body>
                                    <Card.Title className="profileinf-color text-center mt-4">Basic Information</Card.Title>
                                    <Card.Text className="p-3 text-size">
                                        <Row />
                                        <p>Name: {this.state.Name} </p>
                                        <Row />
                                        <InputGroup >
                                            <p>Age:</p>
                                            <Col>
                                                <FormControl type="number" min="18" style={{ width: 100 }} />
                                            </Col>
                                        </InputGroup>
                                        <Row />
                                        <InputGroup inline>
                                            <p>Location:</p>
                                            <Col>
                                                <FormControl placeholder="City" />
                                            </Col>
                                            <p>,</p>
                                            <Col >
                                                <FormControl placeholder="State" />
                                            </Col>
                                        </InputGroup>
                                        <Row />
                                        <InputGroup>
                                            <p>I'm inerested in:</p>
                                            <Col>
                                                <Form.Control as="select">
                                                    <option value="Select" selected="true">Choose</option>
                                                    <option value="Male">Man</option>
                                                    <option value="Female">Woman</option>
                                                    <option value="Both">Both</option>
                                                </Form.Control>
                                            </Col>
                                        </InputGroup>
                                        <Row />
                                        <InputGroup>
                                            <p>Height:</p>
                                            <Col sm={4}>
                                                <FormControl placeholder="Feet" type="text" maxLength="4" />
                                            </Col>
                                        </InputGroup>
                                        <Row />
                                        <InputGroup>
                                            <p>Education:</p>
                                            <Col>
                                                <FormControl type="text" />
                                            </Col>
                                        </InputGroup>
                                        <Row />
                                        <InputGroup>
                                            <p>I Love:</p>
                                            <Col>
                                                <FormControl type="text" maxlength="255"/>
                                            </Col>
                                        </InputGroup>
                                        <Row />
                                        <InputGroup>
                                            <p>Work at:</p>
                                            <Col>
                                                <FormControl type="text" maxlength="255"/>
                                            </Col>
                                        </InputGroup>
                                    </Card.Text>
                                    <center className="mb-4">
                                        <Button bsPrefix="profileinf-button-color" onClick={this.handleSubmit}>Submit</Button>
                                    </center>
                                </Card.Body>
                            </Card>
                        )}
                </Col>

                <Col lg={6}>
                    {!this.state.editPhrase &&
                        (
                            <Card className="profileinf-card">
                                <Card.Body>
                                    <Card.Title className="profileinf-color text-center mt-4">Catch Phrase</Card.Title>
                                    <Card.Text className="p-3 text-size"> If you like McDonald’s apple pie, we have a connection if you don’t, opposites attract.</Card.Text>
                                    <center className="mb-4">
                                        <Button bsPrefix="profileinf-button-color" onClick={this.handleEditPhrase}>EDIT</Button>
                                    </center>
                                </Card.Body>
                            </Card>
                        )}
                    {this.state.editPhrase &&
                        (
                            <Card className="profileinf-card">
                                <Card.Body>
                                    <Card.Title className="profileinf-color text-center mt-4">Catch Phrase</Card.Title>
                                    <Card.Text className="p-3 text-size"> 
                                    <FormControl as="textarea" maxlength="255"/>
                                    </Card.Text>
                                    <center className="mb-4">
                                        <Button bsPrefix="profileinf-button-color" onClick={this.handleSubmitPhrase}>Submit</Button>
                                    </center>
                                </Card.Body>
                            </Card>
                        )}
                </Col>
            </>
        )
    }
}

export default ProfileInf
