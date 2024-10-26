import { API } from "./axios";

export const registerUser = async (userData) => {
  try {
    const response = await API.post('/users/register', userData);
    return response.data;
  } catch (error) {
    console.error('회원가입 요청 중 오류 발생:', error);
    throw error;
  }
};

export const findAllUser = async () => {
  try {
    const response = await API.get('/users');
    return response.data;
  } catch (error) {
    console.error('모든 유저 정보 조회 중 오류 발생:', error);
    throw error;
  }
};

export const findOneUser = async (id) => {
  try {
    const response = await API.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('특정 유저 조회 중 오류 발생:', error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await API.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('유저 정보 삭제 중 오류 발생:', error);
    throw error;
  }
};