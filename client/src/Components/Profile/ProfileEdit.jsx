import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Col from 'react-bootstrap/Col'
import * as API from "../../util/api"
import { withRouter } from 'react-router-dom';



export class ProfileEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.userID,
            Name: this.props.Name,
            Age: null,
            Location: null,
            Interested: null,
            Height: null,
            Education: null,
            Hobby: null,
            Work: null,
            errors: [],
        };
    }

    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value })
       
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { userID, Age, City, States, Interested, Feet, Inches, Education, Hobby, Work } = this.state;
        const Height = parseInt(Feet) * 12 + parseInt(Inches);
        const Location = City && States !== null ? `${City.toLowerCase()},${States.toLowerCase()}` : null;
        const userData = {
            userID,
            Age,
            Location,
            Interested,
            Height,
            Education,
            Hobby,
            Work
        }
        API.setProfile(userData).then((result) => {
            if (result.status === 200) {
                window.location.reload(false);
            }
          
        })
            .catch((errors) => {
                console.log(errors)
                this.setState({
                    errors
                })
            })

    };

    render() {
        return (
            <Form>
                <Card className="profileinf-card mb-4" >
                    <Card.Body>
                        <Card.Title className="profileinf-color text-center mt-4">Basic Information</Card.Title>
                        <Card.Text className="p-3 text-size">
                            <Form.Row >
                                <Col>
                                    <Form.Label> Name: {this.state.Name} </Form.Label>
                                </Col>
                            </Form.Row>
                            <Form.Row >
                                <Col>
                                    <Form.Group >
                                        <Form.Row>
                                            <Form.Label>Age:</Form.Label>
                                            <Col>
                                                <FormControl type="number" min="18" id="Age" style={{ width: 100 }} onChange={this.handleChange("Age")} />
                                            </Col>
                                        </Form.Row>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row >
                                <Col>
                                    <Form.Group>
                                        <Form.Row>
                                            <Form.Label>Location:</Form.Label>
                                            <Col>
                                                <FormControl placeholder="City" id="City" onChange={this.handleChange("City")} />
                                            </Col>
                                            <Form.Label>,</Form.Label>
                                            <Col >
                                                <FormControl placeholder="State" id="State" onChange={this.handleChange("States")} />
                                            </Col>
                                        </Form.Row>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Row>
                                            <Form.Label>I'm inerested in:</Form.Label>
                                            <Col sm={6}>
                                                <Form.Control as="select" id="Interested" onChange={this.handleChange("Interested")}>
                                                    <option value="Select" selected="true">Choose</option>
                                                    <option value="male">Man</option>
                                                    <option value="female">Woman</option>
                                                    <option value="both">Both</option>
                                                </Form.Control>
                                            </Col>
                                        </Form.Row>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row >
                                <Col>
                                    <Form.Group>
                                        <Form.Row>
                                            <Form.Label>Height:</Form.Label>
                                            <Col sm={4}>
                                                <FormControl placeholder="Feet" type="number" id="Height" max="6" min="4" onChange={this.handleChange("Feet")} />
                                            </Col>
                                            <Col sm={4}>
                                                <FormControl placeholder="Inches" type="number" id="Height" max="11" min="0" onChange={this.handleChange("Inches")} />
                                            </Col>
                                        </Form.Row>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row >
                                <Col>
                                    <Form.Group>
                                        <Form.Row>
                                            <Form.Label>Education:</Form.Label>
                                            <Col>
                                                <FormControl type="text" id="Education" maxlength="125" onChange={this.handleChange("Education")} />
                                            </Col>
                                        </Form.Row>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row >
                                <Col>
                                    <Form.Group>
                                        <Form.Row>
                                            <Form.Label>I Love:</Form.Label>
                                            <Col>
                                                <FormControl type="text" id="Hobby" maxlength="255" onChange={this.handleChange("Hobby")} />
                                            </Col>
                                        </Form.Row>
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Form.Row >
                                <Col>
                                    <Form.Group>
                                        <Form.Row>
                                            <Form.Label>Work at:</Form.Label>
                                            <Col>
                                                <FormControl type="text" id="Work" maxlength="255" onChange={this.handleChange("Work")} />
                                            </Col>
                                        </Form.Row>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                        </Card.Text>
                        <center className="mb-4">
                            <Button bsPrefix="profileinf-button-color" type="submit" name="action" onClick={this.handleSubmit}>Submit</Button>
                        </center>
                    </Card.Body>
                </Card>
            </Form>
        )
    }
}

export default withRouter(ProfileEdit);
