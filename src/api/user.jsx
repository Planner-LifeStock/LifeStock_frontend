import { API } from "./axios";

export const registerUser = async (userData) => {
  try {
    const response = await API.post('/user/register', userData);
    return response.data;
  } catch (error) {
    console.error('회원가입 요청 중 오류 발생:', error);
    throw error;
  }
};