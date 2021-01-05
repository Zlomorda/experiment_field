const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT_ACTION_CREATOR = 'UPDATE-NEW-POST-TEXT'

let store = {
  _state: {
    posts: [
      { id: 1, post: 'Hi all', likeCount: 12 },
      { id: 2, post: 'Gde vse?', likeCount: 15 },
      { id: 3, post: 'Shas vsio budet', likeCount: 1 },
      { id: 4, post: 'Ili ne budet', likeCount: 33 },
    ],
    dialogs: [
      { id: 1, name: 'Sasha' },
      { id: 2, name: 'Kolya' },
      { id: 3, name: 'Vanya' },
      { id: 4, name: 'Shuki' },
    ],
    messages: [
      { id: 1, msg: 'Kak dela?' },
      { id: 2, msg: 'Gde vse?' },
      { id: 3, msg: 'Vsio horosho' },
      { id: 4, msg: 'Poshli' },
    ],
    newTextPost: '',
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
    if (action.type === ADD_POST) {
      if (!this._state.newTextPost) {
        alert('You need to write something.')
      } else {
        let newPost = {
          id: 5,
          post: this._state.newTextPost,
          likeCount: 0,
        }
        this._state.posts.push(newPost)
        this._state.newTextPost = ''
        this.renderEntireTree(this._state)
      }
    } else if (action.type === UPDATE_NEW_TEXT_ACTION_CREATOR) {
      this._state.newTextPost = action.newText
      this.renderEntireTree(this._state)
    }
  },
}

export const addPostActionCreator = () => {
  return { type: ADD_POST }
}
export const updateNewTextActionCreator = (postText) => {
  return { type: UPDATE_NEW_TEXT_ACTION_CREATOR, newText: postText }
}

export default store
