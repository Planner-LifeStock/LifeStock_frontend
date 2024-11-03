import React, { createContext, useContext, useEffect, useState } from 'react';
import { API } from '../api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setAccessToken(token);
    }
    setIsLoading(false);
  }, []);

  const login = async (data) => {
    try {
      const response = await API.post('/auth/login', data);
      const token = response.data.accessToken;

      localStorage.setItem('accessToken', token);
      setAccessToken(token);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setAccessToken(null);
  };

  // API 요청 시 자동으로 헤더에 accessToken을 설정하도록 인터셉터 추가
  useEffect(() => {
    const requestInterceptor = API.interceptors.request.use((config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });

    return () => {
      API.interceptors.request.eject(requestInterceptor);
    };
  }, [accessToken]);

  return (
    <AuthContext.Provider value={{ accessToken, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);