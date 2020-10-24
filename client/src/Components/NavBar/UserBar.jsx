import React, { Component } from 'react'

export class UserBar extends Component {
    render()
     {
         const {email } = this.props
        return (
            <div>
               <p>
                   This is the authenicated User Bar
                </p>
                <p>
                    {email}
                    </p> 
            </div>
        )
    }
}

export default UserBar
