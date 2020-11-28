import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from '../NavBar/NavBar';
import Buttons from './Buttons'
import Cards from './Cards';
import Footer from '../Footer/Footer'

import * as API from "../../util/api"
import { AuthContext } from "../../Context/authContext";

import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.css';
import "./Matches.css";

export default class Matches extends Component {
    static contextType = AuthContext;
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            found: false,
            userID: null,
            previousID: null,
            name: null, // comes from user Table
            profile: null,
            pictures: [],
            errors: []
        }
    }

    componentDidMount() {
        setTimeout(() =>{
            const { userID } = this.context;
            this.setState({
                userID: userID
            }, () => {
                this.getMatch();
            });
        }, 10)
    }

    getMatch = () => {
        const { userID } = this.state;
        API.findMatch(userID).then((result) => {
            if (result.status === 200) {
                if (result.data.found) {
                    const resultID = result.data.match.userID
                    this.getImages(resultID);
                    this.getUserName(resultID);

                    this.setState({
                        profile: result.data.match,
                        found: true,
                        loading: false,
                    })
                }
                else {
                    this.setState({
                        loading: false,
                        found: false
                    })
                }
            }
        }).catch((errors) => {
            this.setState({
              errors
            })
        });

    }

    getImages = (id) => {
        API.getUserImages(id).then((results) => {
            if (results.status === 200) {
                this.setState({
                    pictures: results.data
                })
            }
        }).catch((errors) => {
            this.setState({
              errors: errors
            })
        });
    }

    getUserName = (id) => {
        API.getName(id).then((result) => {
            if (result.status === 200) {
                this.setState({
                    name: result.data
                })
            }
        }).catch((errors) => {
            this.setState({
                errors
            })
        })
    };

    acceptUser = () => {
        const { userID, profile } = this.state;
        let alert = document.getElementById("prev");
        alert.style.display = "none";
        
        API.response({
            requesterID: userID,
            addresseeID: profile.userID,
            status: 0
        }).then((result) => {
            if (result.status === 200) {
                this.updatePrevious(profile.userID);
                this.getMatch();
            }
        })
        .catch((errors) => {
            this.setState({
                errors
            })
        })
    }

    rejectedUser = () => {
        const { userID, profile } = this.state;
        let alert = document.getElementById("prev");
        alert.style.display = "none";
        
        API.response({
            requesterID: userID,
            addresseeID: profile.userID,
            status: 1
        }).then((result) => {
            if (result.status === 200) {
                this.updatePrevious(profile.userID);
                this.getMatch();
            }
        })
        .catch((errors) => {
            this.setState({
                errors
            })
        })
    }

    prevUser = () => {
        const { userID, previousID } = this.state;
        if (!previousID) {
            let alert = document.getElementById("prev");
            alert.style.display = "block";
        }
        else {
            this.setState({
                loading: true,
            });
            this.getUserName(previousID);
            this.getImages(previousID);
            
            API.previousMatch(userID, previousID)
            .then((result) => {
                if (result.status === 200) {
                    this.setState({
                        profile: result.data,
                        loading: false
                    })
                }
            }).catch((errors) => {
                this.setState({
                    errors
                })
            });
        
        }
        
    }

    updatePrevious = (id) => {
        this.setState({
            previousID: id
        })
    }

    render() {
        const { pictures, profile, loading, found, name } = this.state;
        let body = null;

        if (loading) {

            body = (
                <Alert variant="info" className="finding-match" id="finding">
                    Please wait find the perfect match !
                </Alert>
            );
        }
        else {
            if(found) {
                body = (
                    <div>
                        <Alert variant="danger" className="prev" id="prev">
                            You have no prev match for this session !
                        </Alert>
                        <Cards profile={profile} pictures={pictures} name={name} />
                        <Buttons prev={this.prevUser} reject={this.rejectedUser} accept={this.acceptUser} />
                    </div>
                )
            }
            else {
                body = ( 
                <Alert variant="warning" className="no-match" id="match">
                    No Match found go to update your <Alert.Link href="/filter">FILTER</Alert.Link> to get a match
                </Alert>
                )
            }
        }

        return (
            <>
                <NavBar />
                    <div className="p-4">
                        <Container className="Matches-container">
                            { body }
                        </Container>
                    </div>
                <Footer />
            </>
        )
    }
}
