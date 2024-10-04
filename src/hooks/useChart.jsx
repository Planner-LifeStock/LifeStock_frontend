import { useEffect, useState } from 'react';
import { API } from '../api/axios';

export const useChartData = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const result = await API.get('/company/1/charts');
        setChartData(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChartData();
  }, []);

  return {
    chartData,
    setChartData,
  };
};
