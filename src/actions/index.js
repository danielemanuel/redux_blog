import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL= 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=Daniel '

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return{
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    // we return a callback function, after user submits the form is redirected 
    // to the home page     
    .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPost(id) {
    const request  = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id, callback) {
    const request  = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());
    // callback function to return to the maain page after the user 
    // deleted a certain post 
    return {
        type: DELETE_POST,
        payload: id
    }   
}