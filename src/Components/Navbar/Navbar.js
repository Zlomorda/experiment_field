import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className={style.item}>
                    <NavLink to="/posts">Posts</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/dialogs">Dialogs</NavLink>
                </div>
                <div className={style.item}>Music</div>
                <div className={style.item}>Index</div>
            </div>
        )
    }
}

export default Navbar
