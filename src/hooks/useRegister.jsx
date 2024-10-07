import { useState } from 'react';
import { registerUser } from '../api/registration';  // API 호출 함수 가져오기

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const [errorMessage, setErrorMessage] = useState(''); // 오류 메시지 상태
  const [successMessage, setSuccessMessage] = useState(''); // 성공 메시지 상태

  // 회원가입 처리 함수
  const handleRegister = async (userData) => {
    setIsLoading(true);  // 로딩 상태 시작
    setErrorMessage('');  // 오류 메시지 초기화
    setSuccessMessage('');  // 성공 메시지 초기화

    try {
      const response = await registerUser(userData);
      setSuccessMessage('회원가입 성공!');
    } catch (error) {
      // 특정 오류 메시지에 따라 사용자에게 표시할 메시지를 분기
      if (error.response?.status === 500) {  // 409 Conflict는 일반적으로 중복 데이터 충돌을 의미
        setErrorMessage('동일한 이메일 또는 아이디로 이미 가입하였습니다.');
      } else {
        // API에서 제공하는 기본 메시지 사용, 없을 경우 일반 오류 메시지 표시
        setErrorMessage(error.response?.data?.message || '오류가 발생했습니다.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleRegister,  // 회원가입 함수
    isLoading,  // 로딩 상태
    errorMessage,  // 오류 메시지 상태
    successMessage,  // 성공 메시지 상태
  };
};