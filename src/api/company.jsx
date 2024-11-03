import { API } from "./axios";

export const deleteCompany = async (id, item) => {
    try {
      const response = await API.put(`/company/${id}/list`);
      return response.data;
    } catch (error) {
      console.error("회사 매각 중 오류 발생", error);
      throw error;
    }
  };