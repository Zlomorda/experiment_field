import React, { Component } from 'react'
import style from './Myprofile.module.css'
class Myprofile extends Component {
    render() {
        return (
            <div>
                <img
                    className={style.profileImage}
                    src="https://ondinas.com.br/site/wp-content/themes/options/images/skins/headers/full_width/header-midnightBlue.jpg"
                    alt="Posts"
                />
                <div>
                    <div>Ava + Descriptopn</div>
                    <div>
                        <h3>My Posts</h3>
                    </div>
                    <textarea></textarea>
                    <br />
                    <button>Send Message</button>
                </div>
            </div>
        )
    }
}

export default Myprofile
