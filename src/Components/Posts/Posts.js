import React, { Component } from "react";
import Post from "./Post/Post";
import style from "./Posts.module.css";

class Posts extends Component {
  render() {
    return (
      <div>
        <img
          className={style.img}
          src="https://ondinas.com.br/site/wp-content/themes/options/images/skins/headers/full_width/header-midnightBlue.jpg"
          alt="Posts"
        />
        <div className={style.messageContainer}>
          <div>Ava + Descriptopn</div>
          <div>
            <h3>My Posts</h3>
          </div>
          <textarea></textarea>
          <br />
          <button>Send Message</button>
        </div>
        <div>
          {this.props.posts.map((post) => (
            <Post message={post.post} likes={post.likeCount} />
          ))}
        </div>
      </div>
    );
  }
}

export default Posts;
