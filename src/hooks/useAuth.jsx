import axios from 'axios';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { API } from '../api/axios';

import { checkTokenExp } from '../api/checkTokenExp';
import { getNewAccessToken } from '../api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const rToken = localStorage.getItem('refreshToken');

    if (token) {
      setAccessToken(token);
      setRefreshToken(rToken);
    }
    setIsLoading(false);
  }, []);

  const login = async (data) => {
    try {
      const response = await API.post('/auth/login', data);
      const token = response.data.accessToken;
      const rToken = response.data.refreshToken;

      localStorage.setItem('accessToken', token);
      localStorage.setItem('refreshToken', rToken);
      setAccessToken(token);
      setRefreshToken(rToken);
      return true;
    } catch (error) {
      console.error('로그인 실패:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setAccessToken(null);
    setRefreshToken(null);
  };

  useEffect(() => {
    const verifyAndRefreshToken = async () => {
      if (accessToken && checkTokenExp(accessToken)) {
        try {
          const response = await axios.post(
            'http://localhost:8080/auth/refresh', 
            {},
            {
              headers: {
                Authorization: `Bearer ${refreshToken}`
              }
            }
          );

          const newAccessToken = response.data.accessToken;
          localStorage.setItem('accessToken', newAccessToken);
          setAccessToken(newAccessToken);
          getNewAccessToken(newAccessToken);
          // window.location.reload();
        } catch (error) {
          console.error("Token 재발급 실패:", error);
        }
      }
    };

    verifyAndRefreshToken();
  }, [accessToken, refreshToken]);

  return (
    <AuthContext.Provider value={{ accessToken, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);