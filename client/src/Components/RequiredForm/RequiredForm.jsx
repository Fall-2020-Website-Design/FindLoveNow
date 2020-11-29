import React, { Component } from 'react'
import './RequiredForm.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'


import Settings from './Settings'

export class RequiredForm extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="p-4">
                    <Settings />
                </div>
                <Footer />
            </div>
        )
    }
}

export default RequiredForm
