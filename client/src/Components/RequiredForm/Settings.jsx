import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import YuBin from '../../Images/YuBin.png'
import './RequiredForm.css'
import { AuthContext } from "../../Context/authContext";
import * as API from "../../util/api";



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
            errors: [],
        };
    }

    componentDidMount () {
        const { userID } = this.context;
        this.setState({
            userID: userID
        });
        this.getUserName(userID)
    };

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
        this.setState({ [input]: e.target.value })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { Age , Gender , City , States , Interested , Height , Education , Hobby , Work , Phrase } = this.state;

    }



    render() {
        const { isAuthenicated } = this.context
        return (

            <Container className="requiredform-container">
                <h1 className="requiredform-color text-center mb-4">Basic Information</h1>
                
                        <Form >
                            <Form.Group>
                                <Form.Row>
                                <Col md={3} className="mx-auto">
                                    <Card>
                                        <Card.Img variant="top" type="file" className="image-setting d-block" src={YuBin} rounded />
                                    </Card>
                                </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Form.Label column="sm" >Name: {this.state.Name}</Form.Label>
                                    <Col>
                                        {}
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Form.Label column="sm" sm={2} >Date of birth:</Form.Label>
                                    <Col sm={4}>
                                        <Form.Control type="date" />
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
                                        <Form.Label column="md" md={2}>Gender</Form.Label>
                                        <Col md={2}>
                                            <Form.Check
                                                type="radio"
                                                label="Male"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1"
                                            />
                                        </Col>

                                        <Col md={2}>
                                            <Form.Check
                                                type="radio"
                                                label="Female"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                        </Col>

                                        <Col md={2}>
                                            <Form.Check
                                                type="radio"
                                                label="Other"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios3"
                                            />
                                        </Col>
                                    </Form.Row>
                                </Form.Group>
                            </fieldset>

                            <Form.Group>
                                <Form.Row>
                                    <Form.Label column="sm" sm={2} >Location:</Form.Label>
                                    <Col sm={4}>
                                        <Form.Control type="text" placeholder="City" id="City" />
                                    </Col>
                                    <Col sm={4}>
                                        <Form.Control type="text" placeholder="State" id="State" />
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
                                        <Form.Control as="select" id="Interested">
                                            <option value="M">Man</option>
                                            <option value="W">Woman</option>
                                            <option value="B">Both</option>
                                            <option value="Select" selected="true">Choose</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Form.Label column="sm" sm={2} >Height:</Form.Label>
                                    <Col sm={1}>
                                        <Form.Control type="number" placeholder="Feet" id="Height" max="6" min="4" />
                                    </Col>
                                    <Col sm={1}>
                                        <Form.Control type="number" placeholder="Inches" id="Height" max="11" min="0" />
                                    </Col>
                                    <Col sm={2}>
                                        <Form.Label column="sm" sm={2} className="text-muted">(Optional)</Form.Label>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Form.Label column="sm" sm={2} >Education:</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control type="text" placeholder="" id="Education" maxlength="30" />
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
                                        <Form.Control type="text" placeholder="" id="Hobby" maxlength="30" />
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
                                        <Form.Control type="text" placeholder="" id="Work" maxlength="255" />
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
                                        <Form.Control as="textarea" placeholder="" id="Phrase" maxlength="255" />
                                    </Col>
                                    <Col sm={2}>
                                        <Form.Label column="sm" sm={2} className="text-muted">(Optional)</Form.Label>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <center className="mb-4">
                                <Button bsPrefix="setting-button-color">Submit</Button>
                            </center>
                        </Form>
            </Container>
        )
    }
}

export default Settings
