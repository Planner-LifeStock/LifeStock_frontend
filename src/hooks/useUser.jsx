import React, { createContext, useContext, useEffect, useState } from 'react';
import { API } from '../api/axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [totalAssets, setTotalAssets] = useState(null);

  // 사용자 데이터를 가져오는 함수 정의
  const fetchUserData = async () => {
    try {
      const result = await API.get('/user');
      const response = await API.get('/user/asset');
      setUserData(result.data);
      setTotalAssets(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // 처음 컴포넌트가 마운트될 때 fetchUserData 호출
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData, totalAssets, setTotalAssets, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// useUser 훅 정의
export const useUser = () => useContext(UserContext);