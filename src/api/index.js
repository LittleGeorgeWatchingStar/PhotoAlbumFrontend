import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchPosts = () => axios.get(`${url}/posts`);
export const createPost = (newPost) => axios.post(`${url}/posts`, newPost);
export const likePost = (id) => axios.patch(`${url}/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/posts/${id}`);

export const signIn = (formData) => axios({
    method: 'post',
    url: url + '/users/signin',
    data: formData,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const signUp = (formData) => axios({
    method: 'post',
    url: url + '/users/signup',
    data: formData,
    headers: {
        'Content-Type': 'application/json',
    },
});

