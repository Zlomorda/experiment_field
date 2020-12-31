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
                    <Post message="Hi all!!" likes={5} />
                    <Post message="Whats going on?" likes={10} />
                    <Post message="Somebody there?" likes={18} />
                </div>
            </div>
        )
    }
}

export default Posts
