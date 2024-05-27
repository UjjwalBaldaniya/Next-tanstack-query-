import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { API_URL } from '../constants/appConfig.constant';

const BASE_OPTIONS = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const publicApi: AxiosInstance = axios.create(BASE_OPTIONS);

publicApi.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => Promise.reject(handleError(error)),
);

function handleError(error: AxiosError): Error {
  const errorCode = error.response?.data || 'UNKNOWN_ERROR';
  return new Error(`API Error: ${errorCode}`);
}

export default publicApi;
