import React, { Component } from "react";
import style from "./../Dialogs.module.css";

class Message extends Component {
  render() {
    return <div className={style.message}>{this.props.message}</div>;
  }
}

export default Message;
