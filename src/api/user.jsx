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

export const findAllUser = async () => {
  try {
    const response = await API.get('/user');
    return response.data;
  } catch (error) {
    console.error('모든 유저 정보 조회 중 오류 발생:', error);
    throw error;
  }
};

export const findOneUser = async (id) => {
  try {
    const response = await API.get(`/user`);
    return response.data;
  } catch (error) {
    console.error('특정 유저 조회 중 오류 발생:', error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await API.delete(`/user`);
    return response.data;
  } catch (error) {
    console.error('유저 정보 삭제 중 오류 발생:', error);
    throw error;
  }
};

// export const totalAssets = async () => {
//   try {
//     const response = await API.get('/user/asset');
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.error('유저 총 자산 로딩 중 오류 발생', error);
//     throw error;
//   }
// };