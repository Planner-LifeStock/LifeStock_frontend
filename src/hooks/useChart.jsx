import { useEffect, useState } from 'react';
import { API } from '../api/axios';
import { useCompanyData } from './useCompanyData';

export const useChartData = () => {
  const [chartData, setChartData] = useState(null);
  const { activeCompany } = useCompanyData();

  //userid값에 따른 chartsid 배열을 받고 그 값에 따라서 company chart 데이터를 받아 정렬해서 보내줘야함.
  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const result = await API.get(`/company/${activeCompany.id}/charts`);
        // const response = await API.get(`/chart/company/all/${activeCompany.id}`);
        // console.log(response);
        setChartData(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChartData();
  }, [activeCompany]);

  return {
    chartData,
    setChartData,
  };
};
