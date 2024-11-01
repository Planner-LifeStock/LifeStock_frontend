import React, { act, createContext, useContext, useEffect, useState } from 'react';
import { API } from '../api/axios';

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companyList, setCompanyList] = useState(null)
  const [activeCompany, setActiveCompany] = useState(null)

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const result = await API.get('/company', {
          params: {
            status: 'LISTED',
            id: 1,
          }})
        setCompanyList(result.data)
        setActiveCompany(result.data[0])
        console.log(companyList)
        console.log(activeCompany)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCompanyData()
  }, [])

  return (
    <CompanyContext.Provider value={{ companyList, setCompanyList, activeCompany, setActiveCompany }}>
      {children}
    </CompanyContext.Provider>
  )
}

export const useCompanyData = () => useContext(CompanyContext)

// export const useCompanyData = () => {
//   const [companyList, setCompanyList] = useState(null)
//   const [activeCompany, setActiveCompany] = useState(null)

//   useEffect(() => {
//     const fetchCompanyData = async () => {
//       try {
//         const result = await API.get('/company', {
//           params: {
//             status: 'LISTED',
//             id: 1,
//           }})
//         setCompanyList(result.data)
//         setActiveCompany(result.data[0])
//         console.log(result.data)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     fetchCompanyData()
//   }, [])

//   return {
//     companyList,
//     setCompanyList,
//     activeCompany,
//     setActiveCompany,
//   }
// }
