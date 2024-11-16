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

  const seedMoney = 10000000; // 시드머니
  const totalPurchaseAmount = SumList({ data: companyList, type: 'investmentAmount' }); // 총매입
  const realizedProfitLoss =
    Array.isArray(soldCompany) && soldCompany.length > 0
      ? SumList({ data: soldCompany, type: 'listedStockPrice' }) * 100 - SumList({ data: soldCompany, type: 'investmentAmount' })
      : 0; // 실현손익 잘됨
  const unrealizedProfitLoss = totalAssets - seedMoney - realizedProfitLoss; // 평가손익-> totalAssets 문제 로직 교체
  const totalProfitLoss = realizedProfitLoss + unrealizedProfitLoss; // 총손익
  const totalEvaluationAmount = seedMoney + realizedProfitLoss; // 총평가 -> 문제없음
  const totalReturnRate = (unrealizedProfitLoss / seedMoney) * 100; // 수익률
  const availablePurchaseAmount = totalEvaluationAmount - totalPurchaseAmount - unrealizedProfitLoss;

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
        seedMoney,
        availablePurchaseAmount,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompanyData = () => useContext(CompanyContext);
