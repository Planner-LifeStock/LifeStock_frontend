import React, { createContext, useContext, useEffect, useState } from 'react';
import { API } from '../api/axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await API.get('/user');
        setUserData(result.data)
      } catch (error) {
        console.log(error)
      }
    };
    fetchUserData();
  }, [])

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
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
