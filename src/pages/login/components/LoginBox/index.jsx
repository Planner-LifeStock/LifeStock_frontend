import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../../../components/Button";
import InputBox from "../../../../components/InputBox";

import { useAuth } from "../../../../hooks/useAuth";

import { checkTokenValidate } from "../../../../api/auth";

const LoginEdge = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
  padding: 40px;
  background-color: white;
  border-radius: ${(props) => props.theme.border.radius.small};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`

const Title = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`

const MainTitle = styled.h1`
  font-size: 32px;
  font-weight: ${(props) => props.theme.font.weight.bold};
  margin-bottom: 10px;
  color: #000;
`

const SubTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1px;
`

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`

const linkStyles = {
  marginTop: '20px',
  fontSize: '16px',
  color: '#333',
  textDecoration: 'none',
  cursor: 'pointer',
  display: 'block',
}

const LoginBox = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const { accessToken, login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('아이디와 비밀번호를 입력하세요.');
      return;
    }

    const data = {
      username: email,
      password: password,
    };

    try {
      const isLoginSuccessful = await login(data);
      const isTokenValidate = await checkTokenValidate();
      if (isLoginSuccessful && isTokenValidate) {
        navigate('/');
        window.location.reload();
      } else {
        setErrorMessage('로그인 실패');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('로그인 실패');
    }
  };

  return (
    <LoginEdge>
      <Title>신개념 주식게임 투두리스트</Title>
      <MainTitle>LIFE STOCK</MainTitle>
      <SubTitle>로그인</SubTitle>

      <Form onSubmit={handleLogin}>
        <InputBox
          type="email"
          id="email"
          width={300}
          height={40}
          fontSize={15}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="아이디"
        />
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
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button type="submit">로그인</Button>
      </Form>

      <Link to="/register" style={linkStyles}>
        회원가입하기
      </Link>
    </LoginEdge>
  );
};

export default LoginBox;