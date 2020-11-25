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
            errors: [],
        };
    }

    componentDidMount() {
        setTimeout(() => {
            const { userID } = this.context;
            console.log(userID)
            this.setState({
                userID: userID
            }, () => {this.getUserName(userID)
            this.getUserProfile(userID)} );

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

    render() {
        
        return (
            <div>
                <NavBar />
                <Container fluid>
                    <Row className="p-4">
                        <ProfileUser Name = {this.state.Name} profile = {this.state.profile}/>
                        <ProfileAlbumandInf Name = {this.state.Name} profile = {this.state.profile}/>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default Profile
