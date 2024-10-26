import { API } from "./axios";

export const getCompanyChart = async (companyId) => {
  try {
    const response = await API.get(`/chart/company/all/${companyId}`);
    return response.data;
  } catch (error) {
    console.error('차트 데이터 불러오는 중 오류 발생:', error);
    throw error;
  }
};