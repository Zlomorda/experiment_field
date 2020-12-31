import React, { Component } from 'react'
import style from './Header.module.css'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img
                    className={style.img}
                    alt="header"
                    src="https://www.rachip.com/wp-content/uploads/2016/08/icon-hardware.png"
                />
            </div>
        )
    }
}

export default Header
