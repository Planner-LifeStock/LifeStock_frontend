import React, { act, createContext, useContext, useEffect, useState } from 'react';
import { API } from '../api/axios';

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companyList, setCompanyList] = useState(null)
  const [activeCompany, setActiveCompany] = useState(null)
  const [soldCompany, setSoldCompany] = useState(null)

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const result = await API.get('/company', {
          params: {
            status: 'UNLISTED',
          }})
        const response = await API.get('/company', {
          params: {
            status: 'LISTED',
          }})
        setSoldCompany(response.data)
        setCompanyList(result.data)
        setActiveCompany(result.data[0])
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCompanyData()
  }, [])

  return (
    <CompanyContext.Provider value={{ companyList, setCompanyList, activeCompany, setActiveCompany, soldCompany, setSoldCompany }}>
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
