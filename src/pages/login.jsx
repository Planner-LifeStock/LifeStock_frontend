import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GoogleIcon } from '../assets';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('이메일과 비밀번호를 입력하세요.');
      return;
    }
    console.log('로그인 시도:', { email, password });
    setErrorMessage('로그인 실패');
  };

  return (
    <PageContainer>
      <LoginBox>
        <Title>신개념 주식게임 투두리스트</Title>
        <MainTitle>LIFE STOCK</MainTitle>
        <SubTitle>로그인</SubTitle>

        <Form onSubmit={handleLogin}>
          <Label htmlFor="email">아이디</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="lifestock@naver.com"
          />
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******"
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <LoginButton type="submit">로그인</LoginButton>
        </Form>
        
        <GoogleButton>
          <img src={GoogleIcon} alt="Google Logo" style={{ width: '20px', marginRight: '10px' }} />
          <span>Sign With Google</span>
        </GoogleButton>

        <Link to="/register" style={linkStyles}>
          회원가입하기
        </Link>
      </LoginBox>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #6c89e6;
`;

const LoginBox = styled.div`
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
  gap: 10px;
`;

const Label = styled.label`
  text-align: left;
  margin-bottom: 5px;
  font-size: 16px;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  background-color: #f9f9f9;
`;

const LoginButton = styled.button`
  padding: 12px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
`;

const GoogleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  span {
    font-size: 14px;
    color: #333;
  }
`;

const GoogleLogo = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`;

const SignUpLink = styled.a`
  margin-top: 20px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
`;

const linkStyles = {
  marginTop: '20px',
  fontSize: '14px',
  color: '#333',
  textDecoration: 'none',
  cursor: 'pointer',
  display: 'block',
};

export default LoginPage;