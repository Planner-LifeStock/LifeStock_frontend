import { API } from "./axios";

export const login = async (loginData) => {
  try {
    const response = await API.post('/auth/login', loginData);
    const { accessToken } = response.data;

    localStorage.setItem("accessToken", accessToken);
    const token = localStorage.getItem("accessToken");

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    await axios.get('/auth/validate', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('로그인 요청 중 오류 발생:', error);
    throw error;
  }
};

export const refreshToken = async (loginData) => {
    try {
      const response = await API.post('/auth/refresh', loginData);
      return response.data;
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