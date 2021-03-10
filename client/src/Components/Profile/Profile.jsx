import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import './Profile.css'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from '../Footer/Footer'
import ProfileUser from './ProfileUser'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import * as API from "../../util/api";
import { AuthContext } from "../../Context/authContext";
import Alert from 'react-bootstrap/Alert';
import ProfileInf from './ProfileInf'
import ProfileDeck from './ProfileDeck'
import Col from 'react-bootstrap/Col'


export class Profile extends Component {
    static contextType = AuthContext

    constructor(props) {
        super(props);
        this.state = {
            Name: null,
            profile: null,
            pictures: null,
            loading: true,
            errors: [],
        };
    }

    componentDidMount() {
        setTimeout(() => {
            const { userID } = this.context;

            this.setState({
                userID: userID
            }, () => {
                this.getUserName(userID)
                this.getUserProfile(userID)
                this.displayImage(userID)
            });

        }, 10)

    }

    getUserProfile = (id) => {
        API.getProfile(id).then(result => {

            if (result.status === 200) {

                this.setState({
                    profile: result.data

                })
            }
        }).catch((errors) => {
            this.setState({
                errors
            })
        })
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

    displayImage = (id) => {
        API.getUserImages(id).then((results) => {
            if (results.status === 200) {
                this.setState({
                    pictures: results.data,
                    loading: false

                },)
            }
        }).catch((errors) => {
            this.setState({
                errors: errors
            })
        });
    }

    render() {
        let body = null;
        if (this.state.loading) {
            body = (
                <Alert variant="secondary" className="text-center" style={{ maxHeight: "50px" }} id="finding">
                    Please wait for image to load !
                </Alert>
            );
        }
        else {
            body = (<ProfileUser Name={this.state.Name} profile={this.state.profile} pictures={this.state.pictures} userID={this.state.userID} />)
        }

        let deck = null;
        if (this.state.loading) {
            deck = (
                <Alert variant="secondary" className="text-center" style={{ maxHeight: "50px" }} id="finding-deck">
                    Please wait for image to load !
                </Alert>
            );
        }
        else {
            deck = (<ProfileDeck Name={this.state.Name} profile={this.state.profile} pictures={this.state.pictures} userID={this.state.userID} />)
        }

        return (
            <div>
                <NavBar />
                <Container className="mt-4" fluid>
                    <Row>
                        {body}
                        <Col>
                            {deck}
                            <ProfileInf Name={this.state.Name} profile={this.state.profile} userID={this.state.userID} />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default Profile
