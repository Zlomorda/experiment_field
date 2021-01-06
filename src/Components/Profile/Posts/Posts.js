import React, { Component } from 'react'
import { updateNewTextActionCreator, addPostActionCreator } from '../../../redux/store'
import Post from './Post/Post'
import style from './Posts.module.css'

class Posts extends Component {
  render() {
    let newPostText = React.createRef()

    let addPost = () => {
      this.props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
      let postText = newPostText.current.value
      this.props.dispatch(updateNewTextActionCreator(postText))
    }
    return (
      <div>
        <div className={style.profileContainer}>
          <div>Ava + Descriptors</div>
          <h3>My Posts</h3>
          <textarea onChange={onPostChange} ref={newPostText} value={this.props.newTextPost} />
          <br />
          <button onClick={addPost}>Add Post</button>
        </div>
        {this.props.message.map((post) => (
          <Post message={post.post} likes={post.likeCount} />
        ))}
      </div>
    )
  }
}

export default Posts
