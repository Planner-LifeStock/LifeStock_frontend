import React, { createContext, useContext, useEffect, useState } from 'react';
import { API } from '../api/axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [totalAssets, setTotalAssets] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await API.get('/user');
        const response = await API.get('/user/asset');
        setUserData(result.data)
        setTotalAssets(response.data)
      } catch (error) {
        console.log(error)
      }
    };
    fetchUserData();
  }, [])

  return (
    <UserContext.Provider value={{ userData, setUserData, totalAssets, setTotalAssets }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)

// export const useUser = () => {
//   const [userData, setUserData] = useState(null);

//   //유저 정보 불러오기
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const result = await API.get('/user');
//         setUserData(result.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchUserData();
//   }, []);

//   return {
//     userData,
//     setUserData,
//   };
// };
