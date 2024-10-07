import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRegister } from "../../hooks/useRegister";  // useRegister 훅 가져오기

import Button from "../../components/Button";
import InputBox from "../../components/InputBox";

const RegisterEdge = styled.div`
  width: 400px;
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const MainTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #000;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const Label = styled.label`
  text-align: left;
  margin-bottom: 5px;
  font-size: 16px;
  color: #333;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`;

const LoginLink = styled.a`
  margin-top: 20px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  display: block;
`;

const RegisterBox = () => {
  const [username, setUsername] = useState("");
  const [realName, setRealName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [displayName, setDisplayName] = useState("");  // 표시 이름 (선택 사항)
  const [formError, setFormError] = useState(null); // 폼 에러 상태 추가
  const { handleRegister, isLoading, errorMessage, successMessage } = useRegister();  // useRegister 훅 사용

  const validateForm = () => {
    if (!username) return "아이디를 입력해 주세요.";
    if (!realName) return "이름을 입력해 주세요.";
    if (!email) return "이메일을 입력해 주세요.";
    if (!password) return "비밀번호를 입력해 주세요.";
    if (password.length < 6) return "비밀번호는 최소 6자 이상이어야 합니다.";
    if (password !== confirmPassword) return "비밀번호가 일치하지 않습니다.";
    if (!/^[a-z0-9-_]{3,16}$/.test(username)) return "아이디는 3~16자의 알파벳, 숫자, 혹은 - _ 으로 이루어져야 합니다.";
    if (phoneNumber.length < 10 || 
      (!/^\+\d{1,2}-\d{3,4}-\d{4}$/.test(phoneNumber) && 
      !/^010-\d{3,4}-\d{4}$/.test(phoneNumber))) {
    return "전화번호 형식이 잘못되었습니다. (예: +10-1234-5678 또는 010-1234-5678)";
    }
    if (displayName && displayName.length > 45) return "표시 이름은 최대 45자까지 입력할 수 있습니다.";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormError(null);

    // 폼 검증 로직을 실행하여 새로운 오류 확인
    const error = validateForm();
    if (error) {
      // 새로운 오류가 있으면 오류 메시지를 업데이트
      setFormError(error);
      return;
    }

    const userData = {
      username,
      password,
      realName,
      email,
      phoneNumber,
      displayName: displayName || undefined,  // displayName은 선택 사항이므로 입력되었을 때만 포함
    };

    handleRegister(userData);  // 회원가입 요청 전송
  };

  return (
    <RegisterEdge>
      <Title>신개념 주식게임 투두리스트</Title>
      <MainTitle>LIFE STOCK</MainTitle>
      <SubTitle>계정등록</SubTitle>

      <Form onSubmit={handleSubmit}>
        <InputBox
          type="text"
          id="username"
          width={300}
          height={40}
          fontSize={15}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="아이디 (3~16자)"
        />
        <InputBox
          type="text"
          id="realName"
          width={300}
          height={40}
          fontSize={15}
          value={realName}
          onChange={(e) => setRealName(e.target.value)}
          placeholder="이름"
        />
        <InputBox
          type="email"
          id="email"
          width={300}
          height={40}
          fontSize={15}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
        />
        <InputBox
          type="text"
          id="phoneNumber"
          width={300}
          height={40}
          fontSize={15}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="전화번호 (예: +12-3456-7890)"
        />
        <InputBox
          type="text"
          id="displayName"
          width={300}
          height={40}
          fontSize={15}
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="표시 이름 (선택 사항)"
        />
        <InputBox
          type="password"
          id="password"
          width={300}
          height={40}
          fontSize={15}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호 (최소 6자)"
        />
        <InputBox
          type="password"
          id="confirmPassword"
          width={300}
          height={40}
          fontSize={15}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="비밀번호 확인"
        />
        {formError && <ErrorMessage>{formError}</ErrorMessage>} {/* 폼 에러 메시지 표시 */}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? '회원가입 중...' : '회원가입하기'}
        </Button>
      </Form>

      <LoginLink href="/login">로그인 화면 돌아가기</LoginLink>
    </RegisterEdge>
  );
};

export default RegisterBox;