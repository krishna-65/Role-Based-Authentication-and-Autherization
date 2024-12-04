import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://role-based-authentication-and-ktpg.onrender.com/api', // Replace with your backend URL
  headers: { 'Content-Type': 'application/json' },
});

export default apiClient;
