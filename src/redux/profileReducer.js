const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT_ACTION_CREATOR = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  posts: [
    { id: 1, post: 'Hi all', likeCount: 12 },
    { id: 2, post: 'Gde vse?', likeCount: 15 },
    { id: 3, post: 'Shas vsio budet', likeCount: 1 },
    { id: 4, post: 'Ili ne budet', likeCount: 33 },
  ],
  newTextPost: '',
}

const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 5,
      post: state.newTextPost,
      likeCount: 0,
    }
    state.posts.push(newPost)
    state.newTextPost = ''
  } else if (action.type === UPDATE_NEW_TEXT_ACTION_CREATOR) {
    state.newTextPost = action.newText
  }

  return state
}

export default profileReducer
