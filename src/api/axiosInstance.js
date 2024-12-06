import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api/v1/users', // This matches the proxy endpoint
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

export default axiosInstance;
