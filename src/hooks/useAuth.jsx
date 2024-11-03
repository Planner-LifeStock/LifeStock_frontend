// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { API } from '../api/axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [accessToken, setAccessToken] = useState(null);
//   const [refreshtoken, setRefreshToken] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem('accessToken');
//     const Rtoken = localStorage.getItem('refreshToken');

//     if (token) {
//       setAccessToken(token);
//       setRefreshToken(Rtoken);
//     }
//     setIsLoading(false);
//   }, []);

//   const login = async (data) => {
//     try {
//       const response = await API.post('/auth/login', data);
//       const token = response.data.accessToken;
//       const rtoken = response.data.refreshToken;

//       localStorage.setItem('accessToken', token);
//       localStorage.setItem('refreshToken', rtoken);
//       setAccessToken(token);
//       setRefreshToken(rtoken);
//       return true;
//     } catch (error) {
//       console.error('Login failed:', error);
//       return false;
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem('accessToken');
//     localStorage.removeItem('refreshToken');
//     setAccessToken(null);
//     setRefreshToken(null);
//   };

//   useEffect(() => {
//     const requestInterceptor = API.interceptors.request.use((config) => {
//       if (accessToken) {
//         config.headers.Authorization = `Bearer ${accessToken}`;
//       }
//       return config;
//     });

//     return () => {
//       API.interceptors.request.eject(requestInterceptor);
//     };
//   }, [accessToken]);

//   return (
//     <AuthContext.Provider value={{ accessToken, isLoading, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

import React, { createContext, useContext, useEffect, useState } from 'react';
import { API } from '../api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
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
      console.error('Login failed:', error);
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
    const requestInterceptor = API.interceptors.request.use((config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });

    const responseInterceptor = API.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response && error.response.status === 401 && refreshToken && !originalRequest._retry) {
          originalRequest._retry = true; // 요청 재시도 플래그 설정
          try {
            // refreshToken으로 새로운 accessToken 요청
            const response = await API.post('/auth/refresh', { refreshToken });
            const newAccessToken = response.data.accessToken;

            // 새로운 accessToken을 로컬 스토리지와 상태에 저장
            localStorage.setItem('accessToken', newAccessToken);
            setAccessToken(newAccessToken);

            // 원래 요청의 Authorization 헤더를 갱신된 accessToken으로 업데이트
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

            // 원래 요청 재시도
            return API(originalRequest);
          } catch (refreshError) {
            console.error("Token refresh failed:", refreshError);
            logout(); // refreshToken이 유효하지 않은 경우 로그아웃 처리
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      API.interceptors.request.eject(requestInterceptor);
      API.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken, refreshToken]);

  return (
    <AuthContext.Provider value={{ accessToken, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);