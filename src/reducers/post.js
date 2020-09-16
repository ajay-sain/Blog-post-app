import { getPost, updatePost, deletePost, likePost } from "../repos"

const initState = {
}

export default (state = initState, action) => {
    switch(action.type){
        case "CLEAR_PAGE_LOADER":
            return { ...state, pageLoader: false }
        case "ACTIVE_PAGE_LOADER":
            return { ...state, pageLoader: true }

        case "CLOSE_FORM_PROCESS_LOADER":
            return { ...state, formLoader: false }
        case "ACTIVE_FORM_PROCESS_LOADER":
            return { ...state, formLoader: true }

        case "GETTING_POSTS_SUCCESS":
            return { ...state, posts: action.payload && action.payload.data }
        case "GETTING_POSTS_FAILED":
            return { ...state, message: action.payload && action.payload.message }

        case "GETTING_POST_DATA_SUCCESS":
            return { ...state, post: action.payload && action.payload.data }
        case "GETTING_POST_DATA_FAILED":
            return { ...state, message: action.payload && action.payload.message }

        case "ADD_POST_TO_STORE":
            return { ...state, posts: [...state.posts,action.payload] }

        case "FETCH_POST_DATA":
            return { ...state, post: getPost(state.posts,action.payload)}

        case "UPDATE_POST_DATA":
            return { ...state, posts: updatePost(state.posts,action.payload)}

        case "DELETE_POST_DATA":
            return { ...state, posts: deletePost(state.posts,action.payload)}

        case "LIKE_POST":
            return { ...state, posts: likePost(state.posts,action.payload)}

        default:
            new Error("No action matched") 
            return state
    }
}