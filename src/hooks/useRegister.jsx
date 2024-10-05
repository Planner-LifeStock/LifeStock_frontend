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
      const response = await registerUser(userData);  // API 호출
      setSuccessMessage('회원가입 성공!');  // 성공 시 메시지 설정
    } catch (error) {
      setErrorMessage('회원가입 실패: ' + error.response?.data?.message || '오류가 발생했습니다.');  // 오류 처리
    } finally {
      setIsLoading(false);  // 로딩 상태 종료
    }
  };

  return {
    handleRegister,  // 회원가입 함수
    isLoading,  // 로딩 상태
    errorMessage,  // 오류 메시지 상태
    successMessage,  // 성공 메시지 상태
  };
};