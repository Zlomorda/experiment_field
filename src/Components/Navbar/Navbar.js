import React, { Component } from 'react'
import style from './Navbar.module.css'

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className={style.item}>
                    <a href="/posts">Posts</a>
                </div>
                <div className={style.item}>
                    <a href="/dialogs">Dialogs</a>
                </div>
                <div className={style.item}>Music</div>
                <div className={style.item}>Index</div>
            </div>
        )
    }
}

export default Navbar
