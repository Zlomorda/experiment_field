import React, { Component } from 'react'
import Post from './Post/Post'
import style from './Posts.module.css'

class Posts extends Component {
    render() {
        return (
            <div>
                <img
                    className={style.img}
                    src="https://ondinas.com.br/site/wp-content/themes/options/images/skins/headers/full_width/header-midnightBlue.jpg"
                    alt="Posts"
                />
                <div>Ava + Descriptopn</div>
                <div>My Posts</div>
                <textarea></textarea>
                <br />
                <button>Send Message</button>
                <div>
                    <Post message="Hi all!!" />
                    <Post message="Whats going on?" />
                    <Post message="Somebody there?" />
                </div>
            </div>
        )
    }
}

export default Posts
