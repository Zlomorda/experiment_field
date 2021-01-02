import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

class DialogItem extends Component {
  render() {
    return (
      <div className={`${style.active}`}>
        <div>
          <NavLink
            to={"/dialogs/" + this.props.id}
            activeClassName={style.active}
          >
            {this.props.name}
          </NavLink>
        </div>
      </div>
    );
  }
}

class Message extends Component {
  render() {
    return <div className={style.message}>{this.props.message}</div>;
  }
}

class Dialogs extends Component {
  render() {
    let dialogsData = [
      { id: 1, name: "Sasha" },
      { id: 2, name: "Vasya" },
      { id: 3, name: "Kolya" },
      { id: 4, name: "Misha" }
    ];
    let messagesData = [
      { id: 1, msg: "Kak dela?" },
      { id: 2, msg: "Gde vse?" },
      { id: 3, msg: "Vsio horosho" },
      { id: 4, msg: "Poshli" }
    ];
    return (
      <div className={style.dialogs}>
        <div className={style.dialogsItems}>
          {dialogsData.map((dialog) => (
            <DialogItem name={dialog.name} id={dialog.id} />
          ))}
        </div>
        <div className={style.messages}>
          {messagesData.map((msg) => (
            <Message message={msg.msg} />
          ))}
        </div>
      </div>
    );
  }
}

export default Dialogs;
