import * as post from '../repos';

export const fetchPosts = param =>{
    return dispatch => {
        dispatch({type: "ACTIVE_PAGE_LOADER"});
        post.getPosts()
            .then((result)=>{
                dispatch({type: "GETTING_POSTS_SUCCESS", payload: {data: result}});
                dispatch({type: "CLOSE_PAGE_LOADER"});
            })
            .catch((err)=>{
                dispatch({type: "GETTING_POSTS_FAILED", payload: {message: "Something went wrong, Please refresh page or report this issue."}});
                dispatch({type: "CLOSE_PAGE_LOADER"});
            })
        }
}

export const fetchPost = param =>{
    return dispatch => {
        dispatch({type: "ACTIVE_PAGE_LOADER"});
        post.getPost(param)
            .then((result)=>{
                dispatch({type: "GETTING_POST_DATA_SUCCESS", payload: {data: result}});
                dispatch({type: "CLOSE_PAGE_LOADER"});
            })
            .catch((err)=>{
                dispatch({type: "GETTING_POST_DATA_FAILED", payload: {message: "Something went wrong, Please refresh page or report this issue."}});
                dispatch({type: "CLOSE_PAGE_LOADER"});
            })
        }
}

export const createPost = param =>{
    return dispatch => {
        dispatch({type: "ACTIVE_PAGE_LOADER"});
        post.getPosts()
            .then((result)=>{
                dispatch({type: "GETTING_POSTS_SUCCESS", payload: {data: result}});
                dispatch({type: "CLOSE_PAGE_LOADER"});
            })
            .catch((err)=>{
                dispatch({type: "GETTING_POSTS_FAILED", payload: {message: "Something went wrong, Please refresh page or report this issue."}});
                dispatch({type: "CLOSE_PAGE_LOADER"});
            })
        }
}

export const updatePost = param =>{
    return dispatch => {
        dispatch({type: "ACTIVE_FORM_PROCESS_LOADER"});
        post.updatePost(param)
            .then((result)=>{
                dispatch({type: "GETTING_POSTS_SUCCESS", payload: {data: result}});
                dispatch({type: "FORM_PROCESS_SUCCESS", payload: {success: true, message: "Updated successfully."}});
                dispatch({type: "CLOSE_FORM_PROCESS_LOADER"});
            })
            .catch((err)=>{
                dispatch({type: "FORM_PROCESS_FAILED", payload: {success: false, message: "Something went wrong, Please try again."}});
                dispatch({type: "CLOSE_FORM_PROCESS_LOADER"});
            })
        }
}