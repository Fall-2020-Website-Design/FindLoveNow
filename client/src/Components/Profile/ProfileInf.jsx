import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { AuthContext } from "../../Context/authContext"
import ProfileEdit from './ProfileEdit'
import { ProfilePhrase } from './ProfilePhrase'

export class ProfileInf extends Component {
    static contextType = AuthContext
    constructor(props) {
        super(props);
        this.state = {
            userID: null,
            Name: null,
            Phrase: null,
            errors: [],
        };
    }
    static getDerivedStateFromProps(props, state) {
        const { userID, profile, Name } = props;
        if (profile) {
            return {
                userID: userID,
                Name: Name,
                Age: profile.Age,
                Location: profile.Location,
                Interested: profile.Interested,
                Height: `${Math.floor(profile.Height / 12)} ' ${profile.Height % 12}''`,
                Education: profile.Education,
                Hobby: profile.Hobby,
                Work: profile.Work,
                Phrase: profile.Phrase
            };
        }
        return null;
    }

    handleEdit = (e) => {
        e.preventDefault();
        this.setState({ edit: !this.state.edit });
    };

    handleEditPhrase = (e) => {
        e.preventDefault();
        this.setState({ editPhrase: !this.state.editPhrase });
    };

    render() {

        return (
            <Form>
                <Form.Row>
                    <Col md={6}>
                        {!this.state.edit &&
                            (
                                <Card className="profileinf-card mb-4" >
                                    <Card.Body>
                                        <Card.Title className="profileinf-color text-center mt-4">Basic Information</Card.Title>
                                        <Card.Text className="p-3 text-size">
                                            <Form.Row>
                                                <Col>
                                                    <Form.Label>Name: {this.state.Name} </Form.Label>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Label>Age: {this.state.Age}</Form.Label>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Label>Location: {this.state.Location}</Form.Label>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Label>I'm inerested in: {this.state.Interested}</Form.Label>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Label>Height: {this.state.Height}</Form.Label>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Label>Education: {this.state.Education}</Form.Label>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Label>I Love: {this.state.Hobby}</Form.Label>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Label>Work at: {this.state.Work}</Form.Label>
                                                </Col>
                                            </Form.Row>
                                        </Card.Text>
                                        <center className="mb-4">
                                            <Button bsPrefix="profileinf-button-color" onClick={this.handleEdit}>EDIT</Button>
                                        </center>
                                    </Card.Body>
                                </Card>
                            )}
                        {this.state.edit &&
                            (
                              <ProfileEdit Name={this.state.Name} userID={this.state.userID} />
                            )}
                    </Col>

                    <Col md={6}>
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
                                <ProfilePhrase userID={this.state.userID}/>
                            )}
                    </Col>
                </Form.Row>
            </Form>
        )
    }
}

export default ProfileInf
