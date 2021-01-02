import React, { Component } from "react";
import Post from "./Post/Post";
import style from "./Posts.module.css";

class Posts extends Component {
  render() {
    let postsData = [
      { id: 1, post: "Hi all", likeCount: 12 },
      { id: 2, post: "Gde vse?", likeCount: 15 },
      { id: 3, post: "Shas vsio budet", likeCount: 1 },
      { id: 4, post: "Ili ne budet", likeCount: 33 }
    ];
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
          {postsData.map((post) => (
            <Post message={post.post} likes={post.likeCount} />
          ))}
        </div>
      </div>
    );
  }
}

export default Posts;
