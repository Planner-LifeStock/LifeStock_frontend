import { API } from "./axios";

export const refreshToken = async (refreshToken) => {
    try {
      const response = await API.post('/auth/refresh', refreshToken);
      return response.data.accessToken;
    } catch (error) {
      console.error('로그인 토큰 갱신 요청 중 오류 발생:', error);
      throw error;
    }
  };

export const checkTokenValidate = async () => {
    try {
    const response = await API.get('/auth/validate');
    return response.data;
    } catch (error) {
    console.error('토큰 유효성 검사 중 오류 발생:', error);
    throw error;
    }
};