import { useEffect, useState } from 'react';
import { API } from '../api/axios';
import { useCompanyData } from './useCompanyData';

export const useRanking = () => {
  const [ranking, setRanking] = useState('');
  const [userRanking, setUserRanking] = useState('');

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const result = await API.get(`/ranking/top`);
        const response = await API.get(`/ranking/rank`);
        setRanking(result.data);
        setUserRanking(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchChartData();
  }, []); //원래 ranking 들어가있던거 때문에 무한 로딩

  return {
    ranking,
    setRanking,
    userRanking,
    setUserRanking,
  };
};
