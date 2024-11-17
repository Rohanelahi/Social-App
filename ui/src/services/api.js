import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API calls
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
};

// Posts API calls
export const postsAPI = {
  getPosts: () => api.get('/posts'),
  createPost: (postData) => api.post('/posts', postData),
  likePost: (postId) => api.post(`/posts/${postId}/like`),
  addComment: (postId, text) => api.post(`/posts/${postId}/comment`, { text }),
};