import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://localhost:8080',
  headers: { 'Content-type': 'application/json' },
});

export const severAPI = axios.create({
  baseURL: 'http://localhost:8080',
  headers: { 'Content-type': 'application/json' },
});
