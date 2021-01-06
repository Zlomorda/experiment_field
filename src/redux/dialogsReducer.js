const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
  messages: [
    { id: 1, msg: 'Kak dela?' },
    { id: 2, msg: 'Gde vse?' },
    { id: 3, msg: 'Vsio horosho' },
    { id: 4, msg: 'Poshli' },
  ],
  dialogs: [
    { id: 1, name: 'Sasha' },
    { id: 2, name: 'Kolya' },
    { id: 3, name: 'Vanya' },
    { id: 4, name: 'Shuki' },
  ],
  newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
  if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    state.newMessageText = action.body
  } else if (action.type === SEND_MESSAGE) {
    let body = state.newMessageText
    state.messages.push({ id: 5, msg: body })
    state.newMessageBody = ''
  }

  return state
}

export default dialogsReducer
