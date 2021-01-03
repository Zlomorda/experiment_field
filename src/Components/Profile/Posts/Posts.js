import React, { Component } from 'react'
import Post from './Post/Post'
import style from './Posts.module.css'

class Posts extends Component {
    render() {
        let newPostText = React.createRef()

        let addPost = () => {
            let postText = newPostText.current.value
            alert(postText)
        }
        return (
            <div>
                <div className={style.profileContainer}>
                    <div>Ava + Descriptopn</div>
                    <div>
                        <h3>My Posts</h3>
                    </div>
                    <textarea ref={newPostText}></textarea>
                    <br />
                    <button onClick={addPost}>Send Message</button>
                </div>
                {this.props.message.map((post) => (
                    <Post message={post.post} likes={post.likeCount} />
                ))}
            </div>
        )
    }
}

export default Posts
