import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  // Other custom configurations
});

export default axiosInstance;
