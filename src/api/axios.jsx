import axios from 'axios';

import { checkTokenValidate } from './auth';

export const API = axios.create({
  baseURL: 'https://lifestock.work:8080/',
  // baseURL: 'http://3.36.201.192:8080/',:
  // baseURL: 'http://localhost:8080',
});

API.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export const getNewAccessToken = async accessToken => {
  try {
    const response = checkTokenValidate(accessToken);
    if (response === '유효한 토큰') {
      API.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      localStorage.setItem('accessToken', accessToken);
    }
  } catch (error) {
    throw error;
  }
};
