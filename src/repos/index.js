export const getPosts = () =>{
    return new Promise((resolve, reject)=>{
        try{
            const database = require("../assets/blog-posts.json");
            const arr = database.posts
            resolve(arr);
        }
        catch(err){
            reject(err)
        }
    })
}

export const getPost = (arr,id) =>{
    const result = arr.find( post => post.id == id)
    return result;
}

export const updatePost = (arr,obj) =>{
    const index = arr.map( post => {
        if(post.id == obj.id)
            return obj
        else 
            return post
    })
    return index;
}

export const deletePost = (arr,id) =>{
    const index = arr.filter( post => post.id != id)
    return index;
}

export const likePost = (arr,id) =>{
    const index = arr.map( post => {
        if(post.id == id)
            return {...post, like: !post.like}
        else 
            return post
    })
    return index;
}