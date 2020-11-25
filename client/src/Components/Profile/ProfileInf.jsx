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
            Location: null,
            Interested: null,
            Height: null,
            Education: null,
            Hobby: null,
            Work: null,
            Phrase: null,
            errors: [],
        };
    }
    static getDerivedStateFromProps(props, state) {
        const { profile, Name } = props;
        if (profile) {
            const Location = profile.Location.split(", ");
            return {

                Name: Name,
                Age: profile.Age,
                Location: Location[0].charAt(0).toUpperCase() + Location[0].slice(1) + ", " +Location[1].charAt(0).toUpperCase() + Location[1].slice(1),
                Interested: profile.Interested.charAt(0).toUpperCase() + profile.Interested.slice(1),
                Height: `${Math.floor(profile.Height/12)} ' ${profile.Height % 12}''`,
                Education: profile.Education,
                Hobby: profile.Hobby, 
                Work: profile.Work,
                Phrase: profile.Phrase
            };
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { userID, Age, City, States, Interested, Feet, Inches, Education, Hobby, Work } = this.state;
        const Height = parseInt(Feet)*12 + parseInt(Inches);
        const userData = {
            userID,
            Age,
            City,
            States,
            Interested,
            Height,
            Education,
            Hobby,
            Work,
        }
        API.setProfile(userData).then((result) => {
            if (result.status === 200) {
                console.log(result);
            }
            alert("Profile Form set!")
        })
            .catch((errors) => {
                console.log(errors)
                this.setState({
                    errors
                })
                alert("Filled out requiere fields")
            })

    };

    handleSubmitPhrase = (e) => {
        e.preventDefault();
        const { userID, Phrase } = this.state;

        const userData = {
            userID,
            Phrase
        }
        API.setProfile(userData).then((result) => {
            if (result.status === 200) {
                console.log(result);
            }
            alert("Profile Form set!")

        })

            .catch((errors) => {
                console.log(errors)
                this.setState({
                    errors
                })
                alert("Filled out requiere fields")
            })

    };

    handleEdit = (e) => {
        e.preventDefault();
        this.setState({ edit: !this.state.edit });
    };

    handleEditPhrase = (e) => {
        e.preventDefault();
        this.setState({ editPhrase: !this.state.editPhrase });
    };

    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value })
    };

    render() {

        return (
            <>
                <Col lg={6}>
                    {!this.state.edit &&
                        (
                            <Card className="profileinf-card mb-4" >
                                <Card.Body>
                                    <Card.Title className="profileinf-color text-center mt-4">Basic Information</Card.Title>
                                    <Card.Text className="p-3 text-size">
                                        <Row>
                                            <Col>
                                                <p>Name: {this.state.Name} </p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p>Age: {this.state.Age}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p>Location: {this.state.Location}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p>I'm inerested in: {this.state.Interested}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p>Height: {this.state.Height}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p>Education: {this.state.Education}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p>I Love: {this.state.Hobby}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p>Work at: {this.state.Work}</p>
                                            </Col>
                                        </Row>
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
                                        <Row >
                                            <Col>
                                                <p>Name: {this.state.Name} </p>
                                            </Col>
                                        </Row>
                                        <Row >
                                            <Col>
                                                <InputGroup >
                                                    <p>Age:</p>
                                                    <Col>
                                                        <FormControl type="number" min="18" style={{ width: 100 }} onChange={this.handleChange("Age")} />
                                                    </Col>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row >
                                            <Col>
                                                <InputGroup inline>
                                                    <p>Location:</p>
                                                    <Col>
                                                        <FormControl placeholder="City" id="City" onChange={this.handleChange("City")} />
                                                    </Col>
                                                    <p>,</p>
                                                    <Col >
                                                        <FormControl placeholder="State" id="State" onChange={this.handleChange("States")} />
                                                    </Col>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <InputGroup>
                                                    <p>I'm inerested in:</p>
                                                    <Col>
                                                        <Form.Control as="select" id="Interested" onChange={this.handleChange("Interested")}>
                                                            <option value="Select" selected="true">Choose</option>
                                                            <option value="male">Man</option>
                                                            <option value="female">Woman</option>
                                                            <option value="both">Both</option>
                                                        </Form.Control>
                                                    </Col>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row >
                                            <Col>
                                                <InputGroup>
                                                    <p>Height:</p>
                                                    <Col sm={4}>
                                                        <FormControl placeholder="Feet" type="number" id="Height" max="6" min="4" onChange={this.handleChange("Feet")} />
                                                    </Col>
                                                    <Col sm={4}>
                                                <FormControl placeholder="Inches" type="number" id="Height" max="11" min="0" onChange={this.handleChange("Inches")}/>
                                            </Col>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row >
                                            <Col>
                                                <InputGroup>
                                                    <p>Education:</p>
                                                    <Col>
                                                        <FormControl type="text" id="Education" maxlength="125" onChange={this.handleChange("Education")} />
                                                    </Col>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row >
                                            <Col>
                                                <InputGroup>
                                                    <p>I Love:</p>
                                                    <Col>
                                                        <FormControl type="text" id="Hobby" maxlength="255" onChange={this.handleChange("Hobby")} />
                                                    </Col>
                                                </InputGroup>
                                            </Col>
                                        </Row>

                                        <Row >
                                            <Col>
                                                <InputGroup>
                                                    <p>Work at:</p>
                                                    <Col>
                                                        <FormControl type="text" id="Work" maxlength="255" onChange={this.handleChange("Work")} />
                                                    </Col>
                                                </InputGroup>
                                            </Col>
                                        </Row>
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
                                    <Card.Text className="p-3 text-size"> {this.state.Phrase} </Card.Text>
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
                                        <FormControl as="textarea" maxlength="255" onChange={this.handleChange("Work")} />
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
