import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import style from "./../Dialogs.module.css";

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

export default DialogItem;
