import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const apiRequest = {
  get: axiosInstance.get,
  post: axiosInstance.post,
  delete: axiosInstance.delete,
  put: axiosInstance.put,
  patch: axiosInstance.patch,
};

export default apiRequest;
