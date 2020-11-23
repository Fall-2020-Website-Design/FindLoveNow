import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Alex from '../../Images/Alex.png'
import Image from 'react-bootstrap/Image'
import Location from '../../Images/location.svg'
import { AuthContext } from "../../Context/authContext";
import * as API from "../../util/api";

export class ProfileUser extends Component {
    static contextType = AuthContext
    constructor(props) {
        super(props);
        this.state = {
            userID: null,
            Name: null,
            Age: null,
            City: null,
            States: null,
            Phrase: null,
            errors: [],
        };
    }
    componentDidMount() {
        setTimeout(() => {
            const { userID } = this.context;
            this.setState({
                userID: userID
            }, () => this.getUserName(userID));

        }, 5)
        console.log(this.state)
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
        const { email, isAuthenicated, } = this.context
        return (
            <Col lg={4}>
                <Card className="profile-card mb-4">
                    <Card.Img variant="top" className="image-deck d-block" style={{ height: '100%' }} src={Alex} rounded />
                    <Card.Body className="p-4">
                        <Card.Title className="title-size">{this.state.Name}, 27</Card.Title>
                        <Card.Text className="text-size text-muted">
                            I'm goofy and love puppies
                    </Card.Text>
                        <div className="text-size text-muted">
                            <Image src={Location} />
                        Brooklyn, NY
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default ProfileUser
