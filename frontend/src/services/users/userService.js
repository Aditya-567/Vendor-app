import axios from 'axios';

const API_URL = "http://localhost:8000/api/v1/users";

export const registerAPI = (userData) => axios.post(`${API_URL}/register`, userData);
export const loginAPI = (userData) => axios.post(`${API_URL}/login`, userData);
