import { useEffect, useState } from 'react';
import { API } from '../api/axios';

export const useUser = () => {
  const [userData, setUserData] = useState(null);

  //유저 정보 불러오기
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await API.get('/users/1');
        setUserData(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);

  return {
    userData,
    setUserData,
  };
};
