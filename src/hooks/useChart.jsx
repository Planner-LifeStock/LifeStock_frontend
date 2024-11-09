// useChartData.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { API } from '../api/axios';
import { useCompanyData } from './useCompanyData';

const ChartDataContext = createContext();

export const ChartProvider = ({ children }) => {
  const [chartData, setChartData] = useState(null);
  const { activeCompany } = useCompanyData();
  const [chartArr, setChartArr] = useState([{ data: [] }]); // chartArr를 상태로 관리

  const fetchChartData = async () => {
    if (activeCompany) {
      try {
        const result = await API.get(`/company/${activeCompany.id}/charts`);
        setChartData(result.data);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchChartData(); // 처음 activeCompany가 설정될 때 호출
  }, [activeCompany]);

  useEffect(() => {
    if (chartData) {
      const newChartArr = [{ data: [] }];
      chartData.chartList.forEach(chart => {
        const date = new Date(chart.date).getTime();
        newChartArr[0].data.push({
          x: date,
          y: [chart.open, chart.high, chart.low, chart.close],
        });
      });
      setChartArr(newChartArr); // chartData가 변경될 때마다 chartArr 업데이트
      console.log(newChartArr);
    }
  }, [chartData]);

  return <ChartDataContext.Provider value={{ chartData, chartArr, setChartData, fetchChartData }}>{children}</ChartDataContext.Provider>;
};

export const useChartData = () => useContext(ChartDataContext);
