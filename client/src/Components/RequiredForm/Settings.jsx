import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import add from '../../Images/add.svg'
import './RequiredForm.css'
import { AuthContext } from "../../Context/authContext";
import * as API from "../../util/api";
import { withRouter } from 'react-router-dom';



export class Settings extends Component {

    static contextType = AuthContext;
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
            file: null,
            errors: [],
        };
    }

    componentDidMount() {
        setTimeout(() => {
            const { userID } = this.context;
            console.log(userID)
            this.setState({
                userID: userID
            }, () => this.getUserName(userID));

        }, 10)

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
    }

    handleChange = (input) => (e) => {
        if (input === "file") {
            this.setState({ file: e.target.files[0] }, () => { console.log(this.state.file); });
            // Details of the uploaded file 
        }
        else {
            this.setState({ [input]: e.target.value })
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.updateProfile();
        this.updatePreference();
        this.uploadFile();

    };

    updateProfile = () => {
        const { userID, Age, Gender, City, States, Interested, Feet, Inches, Education, Hobby, Work, Phrase } = this.state;
        const Height = parseInt(Feet) * 12 + parseInt(Inches);
        const userData = {
            userID,
            Age,
            Gender,
            City,
            States,
            Interested,
            Height,
            Education,
            Hobby,
            Work,
            Phrase
        }
        API.setProfile(userData).then((result) => {
            if (result.status === 200) {

            }
            alert("Profile Form set!")
        })

            .catch((errors) => {

                this.setState({
                    errors
                })
                alert("Filled out requiere fields")
            })
    }

    updatePreference = () => {
        const { userID, Interested, City, States } = this.state;
        const userData = {
            userID,
            Interested,
            City,
            States
        }
        API.formPreference(userData).then((result) => {
            if (result.status === 200) {

                this.props.history.push('/Home');
            }
        })
            .catch((errors) => {

                this.setState({
                    errors
                })
            })
    }

    uploadFile = () => {
        const { userID } = this.state;
        const file = new FormData();

        // Update the formData object 
        file.append(
            "file",
            this.state.file,
            this.state.file.name
        );
        API.uploadImage(userID, file).then((result) => {
            if (result.status === 200) {
                console.log(result);
            }
        })
            .catch((errors) => {
                console.log(errors)
                this.setState({
                    errors
                })
            })
    }


    render() {
        return (

            <Container className="requiredform-container">
                <h1 className="requiredform-color text-center mb-4">Basic Information</h1>
                    <Form noValidate>
                        <Form.Group action="/upload" method="POST" enctype="multipart/form-data">
                            <Form.Row>
                                <Col md={3} className="mx-auto">
                                    <Card className="image-upload">
                                        <label for="file-input">
                                            <Card.Img variant="top" className="image-setting d-block" style={{ height: '100%' }} src={add} rounded />
                                        </label>
                                        <input id="file-input" type="file" required />
                                    </Card>
                                </Col>
                            </Form.Row>
                        </Form.Group>

    
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="sm" >Name: {this.state.Name}</Form.Label>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="sm" sm={2} >Age:</Form.Label>
                            <Col sm={4}>
                                <Form.Control type="number" style={{ width: 100 }} min="18" onChange={this.handleChange("Age")} />
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group>
                        <Form.Row className="p-2">
                            <Form.Check
                                className="text-muted"
                                required
                                name="terms"
                                label="By checking this box I agree that the I'm over 18"
                                feedback="You must agree before proceeding"
                                id="ageValidation"
                            />
                        </Form.Row>
                    </Form.Group>

                    <fieldset aria-required>
                        <Form.Group>
                            <Form.Row inline>
                                <Form.Label column="md" md={2} >Gender</Form.Label>
                                <Col md={2}>
                                    <Form.Control as="select" onChange={this.handleChange("Gender")}>
                                        <option selected disabled>Choose</option>
                                        <option value="male">Man</option>
                                        <option value="female">Woman</option>
                                    </Form.Control>
                                </Col>
                            </Form.Row>
                        </Form.Group>
                    </fieldset>

                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="sm" sm={2} >Location:</Form.Label>
                            <Col sm={4}>
                                <Form.Control type="text" placeholder="City" id="City" onChange={this.handleChange("City")} />
                            </Col>
                            <Col sm={4}>
                                <Form.Control type="text" placeholder="State" id="State" onChange={this.handleChange("States")} />
                            </Col>
                            <Col sm={2}>
                                <Form.Label column="sm" sm={2} className="text-muted">(Optional)</Form.Label>
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="sm" sm={2} >I'm Interested in:</Form.Label>
                            <Col sm={4}>
                                <Form.Control as="select" id="Interested" onChange={this.handleChange("Interested")}>
                                    <option selected disabled>Choose</option>
                                    <option value="male">Man</option>
                                    <option value="female">Woman</option>
                                    <option value="both">Both</option>
                                </Form.Control>
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="sm" sm={2} >Height:</Form.Label>
                            <Col sm={1}>
                                <Form.Control type="number" placeholder="Feet" id="Height" max="6" min="4" onChange={this.handleChange("Feet")} />
                            </Col>
                            <Col sm={1}>
                                <Form.Control type="number" placeholder="Inches" id="Height" max="11" min="0" onChange={this.handleChange("Inches")} />
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="sm" sm={2} >Education:</Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text" id="Education" maxlength="255" onChange={this.handleChange("Education")} />
                            </Col>
                            <Col sm={2}>
                                <Form.Label column="sm" sm={2} className="text-muted">(Optional)</Form.Label>
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="sm" sm={2} >I love:</Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text" id="Hobby" maxlength="255" onChange={this.handleChange("Hobby")} />
                            </Col>
                            <Col sm={2}>
                                <Form.Label column="sm" sm={2} className="text-muted">(Optional)</Form.Label>
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="sm" sm={2} >Work at:</Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text" id="Work" maxlength="255" onChange={this.handleChange("Work")} />
                            </Col>
                            <Col sm={2}>
                                <Form.Label column="sm" sm={2} className="text-muted">(Optional)</Form.Label>
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="sm" sm={2} >Catch Phrase:</Form.Label>
                            <Col sm={8}>
                                <Form.Control as="textarea" id="Phrase" maxlength="255" onChange={this.handleChange("Phrase")} />
                            </Col>
                            <Col sm={2}>
                                <Form.Label column="sm" sm={2} className="text-muted">(Optional)</Form.Label>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <center className="mb-4">
                        <Button bsPrefix="setting-button-color" onClick={this.handleSubmit}>Submit</Button>
                    </center>
                </Form>
            </Container>
        )
    }
}

export default withRouter(Settings); 
