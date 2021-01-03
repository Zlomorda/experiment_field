import React, { Component } from 'react'
import Myprofile from './Myprofile/Myprofile'
import Posts from './Posts/Posts'

class Profile extends Component {
    render() {
        return (
            <div>
                <Myprofile />
                <Posts message={this.props.posts} />
            </div>
        )
    }
}

export default Profile
