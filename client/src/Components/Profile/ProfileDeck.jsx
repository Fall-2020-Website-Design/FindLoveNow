import React, { Component } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import add from '../../Images/add.svg'
import * as API from "../../util/api";


export class ProfileDeck extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userID: null,
            file: null,
            validated: false,
            errors: [],
        };
    }

    handleChange = (input) => (e) => {
        if (input === "file") {
            this.setState({ file: e.target.files[0] });
            // Details of the uploaded file 
        }
        else {
            this.setState({ [input]: e.target.value })
        }
    };

    handelSubmit = (e) => {
        e.preventDefault();
        this.uploadFile();
    }

    uploadFile = () => {
        const { userID, file } = this.state;
        const formdata = new FormData();
        if (file === null) {
            let dangerAlert = document.getElementById("empty-file");
            dangerAlert.style.display = "block";

        }
        else {
            // Update the formData object 
            formdata.append(
                "file",
                this.state.file,
                this.state.file.name
            );
            API.uploadImage(userID, formdata).then((result) => {

            })
                .catch((errors) => {
                    console.log(errors)
                    this.setState({
                        errors
                    })
                })
        }
    }



    render() {
        return (
            <Form>
                <Form.Row>
            <Col>
            
                <CardDeck>
                    <Card className="image-upload-profile">
                        <label for="file-input">
                            <Card.Img variant="top" className="image-deck d-block" style={{ height: '100%' }}
                                src={this.state.file === null ? add : URL.createObjectURL(this.state.file)
                                } />
                        </label>
                        <input id="file-input" type="file" onChange={this.handleChange("file")} />
                    </Card>

                    <Card className="image-upload-profile">
                        <label for="file-input">
                            <Card.Img variant="top" className="image-deck d-block" style={{ height: '100%' }} src={add} src={this.state.file === null ? add : URL.createObjectURL(this.state.file)
                                }rounded="true" />
                        </label>
                        <input id="file-input" type="file" />
                    </Card>

                    <Card className="image-upload-profile">
                        <label for="file-input">
                            <Card.Img variant="top" className="image-deck d-block" style={{ height: '100%' }} src={add} rounded="true" />
                        </label>
                        <input id="file-input" type="file" />
                    </Card>

                    <Card className="image-upload-profile">
                        <label for="file-input">
                            <Card.Img variant="top" className="image-deck d-block" style={{ height: '100%' }} src={add} rounded="true" />
                        </label>
                        <input id="file-input" type="file" />
                    </Card>
                </CardDeck>
                {/* <center className="mb-4">
                    <Button bsPrefix="profileinf-button-color" onClick={this.handleEditPhrase}>EDIT</Button>
                </center> */}
            </Col>
            </Form.Row>
            </Form>
        )
    }
}

export default ProfileDeck
