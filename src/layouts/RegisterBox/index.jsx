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
  const { handleRegister, isLoading, errorMessage, successMessage } = useRegister();  // useRegister 훅 사용

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !realName || !email || !password || !confirmPassword || !phoneNumber) {
      return;
    }

    if (password !== confirmPassword) {
      return;
    }

    const userData = {
      username,
      realName,
      email,
      password,
      phoneNumber,
      status: "ACTIVE",
      role: "USER",
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
          placeholder="아이디"
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
          placeholder="전화번호"
        />
        {/* <Label htmlFor="password">비밀번호</Label> */}
        <InputBox
          type="password"
          id="password"
          width={300}
          height={40}
          fontSize={15}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
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