import React, { createContext, useContext, useEffect, useState } from 'react';
import { API } from '../api/axios';
import SumList from '../function/calculation/sumList';
import { useUser } from './useUser';

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companyList, setCompanyList] = useState(null);
  const [activeCompany, setActiveCompany] = useState(null);
  const [soldCompany, setSoldCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const { totalAssets } = useUser();

  const seedMoney = 100000000;
  const totalPurchaseAmount = SumList({ data: companyList, type: 'investmentAmount' });
  const realizedProfitLoss = SumList({ data: soldCompany, type: 'listedStockPrice' }) - SumList({ data: soldCompany, type: 'investmentAmount' });
  const unrealizedProfitLoss = totalAssets - seedMoney;
  const totalProfitLoss = realizedProfitLoss + unrealizedProfitLoss;
  const totalEvaluationAmount = seedMoney + unrealizedProfitLoss;
  const totalReturnRate = (unrealizedProfitLoss / seedMoney) * 100;

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
      console.log('Error fetching company data:', error);
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
        totalPurchaseAmount,
        realizedProfitLoss,
        unrealizedProfitLoss,
        totalProfitLoss,
        totalEvaluationAmount,
        totalReturnRate,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompanyData = () => useContext(CompanyContext);
