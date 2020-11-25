import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from '../NavBar/NavBar';
import Buttons from './Buttons'
import Cards from './Cards';
import Footer from '../Footer/Footer'

import * as API from "../../util/api"
import { AuthContext } from "../../Context/authContext";

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

        API.response({
            requesterID: userID,
            addresseeID: profile.userID,
            status: 0
        }).then((result) => {
            if (result.status === 200) {
                this.updatePrevious(userID);
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

        API.response({
            requesterID: userID,
            addresseeID: profile.userID,
            status: 1
        }).then((result) => {
            if (result.status === 200) {
                this.updatePrevious(userID);
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
        if (previousID === null) {
            alert("You have no pervious match for this session");
        }
        else {
            API.previousMatch(userID, previousID)
            .then((result) => {
                if (result.status === 200) {
                    this.setState({
                        profile: result.data.match
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
            body = <div>
                Please wait finding a match!
            </div>
        }
        else {
            if(found) {
               body = <div>
                    <Cards profile={profile} pictures={pictures} name={name} />
                    <Buttons prev={this.prevUser} reject={this.rejectedUser} accept={this.acceptUser} />
               </div>
            }
            else {
                body = <div>
                    No Match found go to update your preferences to get a match
                </div>
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
