import React, { Component } from 'react'
import style from './Navbar.module.css'

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className={style.item}>Home</div>
                <div className={style.item}>Posts</div>
                <div className={style.item}>Messages</div>
                <div className={style.item}>Index</div>
            </div>
        )
    }
}

export default Navbar
