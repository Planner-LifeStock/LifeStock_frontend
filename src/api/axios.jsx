import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://localhost:8080',
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const getNewAccessToken = async (accessToken) => {
  try {
    if (accessToken) {
      API.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
  } catch (error) {
    throw error;
  }
};