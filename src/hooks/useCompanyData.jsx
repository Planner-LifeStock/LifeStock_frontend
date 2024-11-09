// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { API, getNewAccessToken } from '../api/axios';

// const CompanyContext = createContext();

// export const CompanyProvider = ({ children }) => {
//   const [companyList, setCompanyList] = useState(null);
//   const [activeCompany, setActiveCompany] = useState(null);
//   const [soldCompany, setSoldCompany] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCompanyData = async () => {
//       //[todo]result,response 변수가 적절하지 않아보임 수정할것
//       try {
//         const result = await API.get('/company', {
//           params: {
//             status: 'UNLISTED',
//           },
//         });
//         const response = await API.get('/company', {
//           params: {
//             status: 'LISTED',
//           },
//         });
//         setSoldCompany(response.data);
//         setCompanyList(result.data);
//         setActiveCompany(result.data[0]);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCompanyData();
//   }, []);

//   return (
//     <CompanyContext.Provider value={{ companyList, setCompanyList, activeCompany, setActiveCompany, soldCompany, setSoldCompany, loading }}>
//       {children}
//     </CompanyContext.Provider>
//   );
// };

// export const useCompanyData = () => useContext(CompanyContext);

import React, { createContext, useContext, useEffect, useState } from 'react';
import { API } from '../api/axios';

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companyList, setCompanyList] = useState(null);
  const [activeCompany, setActiveCompany] = useState(null);
  const [soldCompany, setSoldCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCompanyData = async () => {
    try {
      // 명확한 변수명으로 수정
      const unlistedCompanies = await API.get('/company', {
        params: { status: 'UNLISTED' },
      });
      const listedCompanies = await API.get('/company', {
        params: { status: 'LISTED' },
      });
      setSoldCompany(listedCompanies.data);
      setCompanyList(unlistedCompanies.data);
      setActiveCompany(unlistedCompanies.data[0]);
    } catch (error) {
      console.log("Error fetching company data:", error);
    } finally {
      setLoading(false);
    }
  };

  // 첫 렌더링 시 fetchCompanyData 호출
  useEffect(() => {
    fetchCompanyData();
  }, []);

  return (
    <CompanyContext.Provider
      value={{
        companyList,
        setCompanyList,
        activeCompany,
        setActiveCompany,
        soldCompany,
        setSoldCompany,
        loading,
        fetchCompanyData,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompanyData = () => useContext(CompanyContext);