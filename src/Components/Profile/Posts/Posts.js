import React, { Component } from 'react'
import Post from './Post/Post'
// import style from './Posts.module.css'

class Posts extends Component {
    render() {
        return (
            <div>
                {this.props.message.map((post) => (
                    <Post message={post.post} likes={post.likeCount} />
                ))}
            </div>
        )
    }
}

export default Posts
