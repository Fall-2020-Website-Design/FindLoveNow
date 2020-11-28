import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import './Profile.css'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from '../Footer/Footer'
import ProfileUser from './ProfileUser'
import ProfileAlbumandInf from './ProfileAlbumAndInf'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import * as API from "../../util/api";
import { AuthContext } from "../../Context/authContext";




export class Profile extends Component {
    static contextType = AuthContext

    constructor(props) {
        super(props);
        this.state = {
            Name: null,
            profile: null,
            pictures: [],
            errors: [],
        };
    }

    componentDidMount() {
        setTimeout(() => {
            const { userID } = this.context;
            console.log(userID)
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
                    pictures: results.data

                }, () => { console.log(`image call${this.state.pictures}`) })
            }
        }).catch((errors) => {
            this.setState({
                errors: errors
            })
        });
    }

    render() {

        return (
            <div>
                <NavBar />
                <Container fluid>
                    <Row className="p-4">
                        <ProfileUser Name={this.state.Name} profile={this.state.profile} pictures={this.state.pictures} />
                        <ProfileAlbumandInf Name={this.state.Name} profile={this.state.profile} pictures={this.state.pictures} />
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default Profile
