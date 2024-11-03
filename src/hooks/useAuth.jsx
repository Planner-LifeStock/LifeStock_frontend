import React, { createContext, useContext, useEffect, useState } from 'react';
import { API } from '../api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  const login = async (credentials) => {
    try {
      const response = await API.post('/auth/login', credentials);
      const token = response.data.accessToken;
    
      setAccessToken(token);
      localStorage.setItem("accessToken", token);
      console.log(token);
    } catch (error) {
      console.log(error)
    }
  }

  const logout = () => {
    setAccessToken(null)
  }

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
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);