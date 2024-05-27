import axios from 'axios';
import { API_URL } from '../constants/appConfig.constant';

const BASE_OPTIONS = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const publicApi = axios.create(BASE_OPTIONS);

publicApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.response.data.code);
  },
);
