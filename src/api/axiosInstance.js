import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://7m9dlz-8000.csb.app/api/v1/users', // This matches the proxy endpoint
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

export default axiosInstance;
