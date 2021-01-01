import React, { Component } from 'react'
import style from './Post.module.css'

class Post extends Component {
    render() {
        return (
            <div className={style.posts}>
                <img
                    className={style.img}
                    src="https://cdn2.f-cdn.com/contestentries/1316431/24595406/5ae8a3f2e4e98_thumb900.jpg"
                    alt="Avatar"
                />
                {this.props.message}
                <div>Likes: {this.props.likes}</div>
            </div>
        )
    }
}

export default Post
