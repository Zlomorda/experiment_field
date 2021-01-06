import React, { Component } from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItems/DialogItem'
import Message from './Messages/Message'
import { updateNewMessageBody, sendMessageCreator } from '../../redux/store'

class Dialogs extends Component {
  render() {
    let newMessageBody = React.createRef()

    let onSendMessageClick = () => {
      this.props.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = () => {
      let body = newMessageBody.current.value
      this.props.dispatch(updateNewMessageBody(body))
    }
    return (
      <div className={style.dialogs}>
        <div className={style.dialogsItems}>
          {this.props.dialogsPage.dialogs.map((dialog) => (
            <DialogItem name={dialog.name} id={dialog.id} />
          ))}
        </div>
        <div className={style.messages}>
          {this.props.dialogsPage.messages.map((msg) => (
            <Message message={msg.msg} />
          ))}
        </div>
        <div>
          <textarea onChange={onNewMessageChange} ref={newMessageBody} value={this.props.newMessageBody}></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    )
  }
}

export default Dialogs
