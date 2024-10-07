import { API } from './axios';

export const registerUser = async (userData) => {
  try {
    const response = await API.post('/users', userData);  // 백엔드의 회원가입 경로에 POST 요청
    return response.data;
  } catch (error) {
    console.error('회원가입 요청 중 오류 발생:', error);
    throw error;
  }
};