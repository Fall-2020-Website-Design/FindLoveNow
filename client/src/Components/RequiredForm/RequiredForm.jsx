import React, { Component } from 'react'
import './RequiredForm.css'
import Container from 'react-bootstrap/Container'


import Settings from './Settings'

export class RequiredForm extends Component {
    render() {
        return (
            <Container>
                <div className="p-4">
                    <Settings />
                </div>
            </Container>
        )
    }
}

export default RequiredForm
