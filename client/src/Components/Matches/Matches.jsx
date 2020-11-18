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
            userID: null,
            preferences: null,
            previousID: null,
            user: {
                /* object will be loaded from db with info */
                currentPicture: 0,
                name: "John",
                age: 25,
                bio: "Human Resources at CitiBank",
                miles: "New York, New York",
                images: [require('../../Images/samplepicture.svg'),
                    'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
                    'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
                    'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
                    'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80']
            },
            errors: []
        }
    }

    componentDidMount() {
        setTimeout(() =>{
            const { userID } = this.context;
            this.setState({
                userID: userID
            });
    
            this.getMatch();
        }, 10)
    }

    getMatch = () => {
        API.findMatch(this.state.userID).then((result) => {
            if (result.status === 200) {
                if (result.data.found){
                    console.log(result.data.match);
                    /*
                    this.setState({
                        user: result.data.match
                    })*/
                }
            }
        }).catch((errors) => {
            this.setState({
              errors
            })
        });

    }

    acceptUser = () => {
        API.response({
            requesterID: this.state.userID,
            addresseeID: this.state.user.userID,
            status: 0
        }).then((result) => {
            if (result.status === 200) {
                this.updatePrevious(this.state.userID);
            }
        })
        .catch((errors) => {
            this.setState({
                errors
            })
        })
        console.log("Checkmark clicked!");
    }

    rejectedUser = () => {
        API.response({
            requesterID: this.state.userID,
            addresseeID: this.state.user.userID,
            status: 1
        }).then((result) => {
            if (result.status === 200) {
                this.updatePrevious(this.state.userID);

            }
        })
        .catch((errors) => {
            this.setState({
                errors
            })
        })
        console.log("X button clicked!")
    }

    prevUser = () => {
        console.log("Prev button clicked!")
    }

    updatePrevious = (id) => {
        this.setState({
            previousID: id
        })
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="p-4">
                    <Container className="Matches-container">

                        <Cards user={this.state.user} />

                        <Buttons prev={this.prevUser} reject={this.rejectedUser} accept={this.acceptUser} />

                    </Container>
                </div>
                <Footer />
            </div>
        )
    }
}
