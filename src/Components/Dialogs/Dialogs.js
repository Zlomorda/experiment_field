import React, { Component } from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItems/DialogItem";
import Message from "./Messages/Message";

class Dialogs extends Component {
  render() {
    return (
      <div className={style.dialogs}>
        <div className={style.dialogsItems}>
          {this.props.dialogs.map((dialog) => (
            <DialogItem name={dialog.name} id={dialog.id} />
          ))}
        </div>
        <div className={style.messages}>
          {this.props.messages.map((msg) => (
            <Message message={msg.msg} />
          ))}
        </div>
      </div>
    );
  }
}

export default Dialogs;
