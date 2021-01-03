let state = {
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        post: postMessage,
        likeCount: 0,
    }
    state.posts.push(newPost)
}

export default state
