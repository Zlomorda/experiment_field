import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT_ACTION_CREATOR = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: 'Hi all', likeCount: 12 },
        { id: 2, post: 'Gde vse?', likeCount: 15 },
        { id: 3, post: 'Shas vsio budet', likeCount: 1 },
        { id: 4, post: 'Ili ne budet', likeCount: 33 },
      ],
      newTextPost: '',
    },
    dialogsPage: {
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
    },
    sideBar: {},
  },
  renderEntireTree() {
    console.log('Changed')
  },
  subscribe(observer) {
    this.renderEntireTree = observer
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this.renderEntireTree(this._state)
  },
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewTextActionCreator = (postText) => {
  return { type: UPDATE_NEW_TEXT_ACTION_CREATOR, newText: postText }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBody = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, body: text })

export default store
