import React, { Component } from 'react'
import './RequiredForm.css'


import Settings from './Settings'

export class RequiredForm extends Component {
    render() {
        return (
            <div>
                <div className="p-4">
                    <Settings />
                </div>
              
            </div>
        )
    }
}

export default RequiredForm
