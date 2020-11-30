import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import * as API from "../../util/api"
import { withRouter } from 'react-router-dom';

export class ProfilePhrase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.userID,
            Phrase: null,
            errors: [],
        };
    }


    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value })
        
    };

    handleSubmitPhrase = (e) => {
        e.preventDefault();
        const { userID, Phrase } = this.state;
        const userData = {
            userID,
            Phrase
        }
        if (Phrase === null) {
            let dangerEdit = document.getElementById("edit-fail");
            dangerEdit.style.display = "block";

        }
        else {
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
        }
    };

    render() {
        return (
            <Form>
                <Form.Row>
                    <Col >
                        <Card className="profileinf-card">
                            <Card.Body>
                                <Card.Title className="profileinf-color text-center mt-4">Catch Phrase</Card.Title>
                                <Alert variant="danger" id="edit-fail" className="filter-alert text-center mt-3">
                                    Please enter phrase or type N/A.
                                </Alert>
                                <Card.Text className="p-3 text-size">
                                    <FormControl as="textarea" maxlength="255" onChange={this.handleChange("Phrase")} />
                                </Card.Text>
                                <center className="mb-4">
                                    <Button bsPrefix="profileinf-button-color" onClick={this.handleSubmitPhrase}>Submit</Button>
                                </center>
                            </Card.Body>
                        </Card>
                    </Col>
                </Form.Row>
            </Form>
        )
    }
}

export default withRouter(ProfilePhrase);
