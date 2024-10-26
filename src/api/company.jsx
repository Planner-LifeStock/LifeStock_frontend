import { API } from "./axios";

export const deleteCompany = async (id, item) => {
    try {
      const response = await API.delete(`/company/${id}`, {data : {item}});
      return response.data;
    } catch (error) {
      console.error('유저 정보 삭제 중 오류 발생:', error);
      throw error;
    }
  };