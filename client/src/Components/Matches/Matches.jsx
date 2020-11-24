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
            profile: { // comes form profile Table
                /* object will be loaded from db with info */
                userID: 3,
                currentPicture: 0,
                name: "John",
                Age: 25,
                Phrase: "Human Resources at CitiBank",
                Location: "New York, New York",
            },
            pictures: [require('../../Images/samplepicture.svg'),
                'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
                'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
                'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
                'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'],
            errors: []
        }
    }

    componentDidMount() {
        setTimeout(() =>{
            const { userID } = this.context;
            this.setState({
                userID: userID
            }, () => {
                console.log(userID);
                this.getMatch();
            });
        }, 10)
    }

    getMatch = () => {
        API.findMatch(this.state.userID).then((result) => {
            if (result.status === 200) {
                console.log(result.data);
                if (result.data.found) {
                    this.setState({
                        profile: result.data.match,
                        found: true,
                        loading: false
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
        console.log(userID, previousID);

        API.previousMatch(userID, previousID)
        .then((result) => {
            if (result.status === 200) {
                console.log(result.data);
                
                this.setState({
                    profile: result.data.match
                })
            }
        })
    }

    updatePrevious = (id) => {
        this.setState({
            previousID: id
        })
    }

    render() {
        const { pictures, profile, loading, found } = this.state;
        let body = null;
        

        if (loading) {
            body = <div>
                Please wait finding a match!
            </div>
        }
        else {
            if(found) {
               body = <div>
                    <Cards profile={profile} images={pictures} />
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
