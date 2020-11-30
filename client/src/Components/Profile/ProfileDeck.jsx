import React, { Component } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import add from '../../Images/add.svg'
import * as API from "../../util/api";
import ProfileImages from './ProfileImages'
import { AuthContext } from "../../Context/authContext";
import Alert from 'react-bootstrap/Alert';


export class ProfileDeck extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            userID: null,
            file: null,
            pictures: [],
            profilePictures: [],
            validated: false,
            errors: [],
        };
    }

    componentDidMount() {
        setTimeout(() => {
            const { userID } = this.context;
            this.setState({
                userID: userID
            }, () => this.getUserImages(userID));

        }, 10)

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

    handelCancel = (e) => {
        e.preventDefault();
        window.location.reload(false);

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
    }

    getUserImages = (id) => {
        API.getUserImages(id).then((results) => {
            if (results.status === 200) {
                this.setState({
                    pictures: results.data
                }, () => {
                    let body = [];
                    for (let index = 0; index < this.state.pictures.length; index++) {
                        body.push(<ProfileImages key={this.state.pictures[index].id} image={this.state.pictures[index].data} type={this.state.pictures[index]} />)
                    }
                    this.setState({ profilePictures: body })
                })
            }
        }).catch((errors) => {
            this.setState({
                errors: errors
            })
        });
    }

    handleEdit = (e) => {
        e.preventDefault();
        this.setState({ edit: !this.state.edit });
    };


    render() {
        return (
            <div>
                {!this.state.edit && (
                    <div>
                        <CardDeck>
                            {this.state.profilePictures}
                        </CardDeck>
                        <center className="p-4">
                            <Button bsPrefix="profileinf-button-color" onClick={this.handleEdit}>Add Photo</Button>
                        </center>
                    </div>
                )}
                {this.state.edit &&
                    (
                        <Col className="p-4">
                            <center>
                                <CardDeck>
                                    <Card className="image-upload-profile">
                                        <label for="file-input">
                                            <Card.Img variant="top" className="image-deck d-block" style={{ maxHeight: '100%', maxWidth: '25%' }}
                                                src={this.state.file === null ? add : URL.createObjectURL(this.state.file)
                                                } />
                                        </label>
                                        <input id="file-input" type="file" onChange={this.handleChange("file")} />
                                    </Card>
                                </CardDeck>
                                <Alert variant="danger" id="empty-file" className="filter-alert mt-3">
                                    Please select an image.
                                    </Alert>
                                <Row>
                                    <Col>
                                        <Button bsPrefix="profileinf-button-color " onClick={this.handelSubmit}>Save</Button>
                                    </Col>
                                    <Col>
                                        <Button bsPrefix="profileinf-button-color" onClick={this.handelCancel}>Cancel</Button>
                                    </Col>
                                </Row>
                            </center>
                        </Col>
                    )}
            </div>
        )
    }
}

export default ProfileDeck
