import React, { Component } from 'react'
import style from './Dialogs.module.css'

class Dialogs extends Component {
    render() {
        return (
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    <div className={`${style.dialog} ${style.active}`}>
                        Sasha
                    </div>
                    <div className={style.dialog}>Kolaya</div>
                    <div className={style.dialog}>Vasya</div>
                    <div className={style.dialog}>Dima</div>
                </div>
                <div className={style.messages}>
                    <div className={style.message}>Hi</div>
                    <div className={style.message}>Nu kak?</div>
                    <div className={style.message}>Ti de?</div>
                </div>
            </div>
        )
    }
}

export default Dialogs
