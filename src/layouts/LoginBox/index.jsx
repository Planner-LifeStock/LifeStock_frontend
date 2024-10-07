import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Button from "../../components/Button";
import InputBox from "../../components/InputBox";
import { GoogleIcon } from "../../assets";
import { API } from "../../api/axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

const LoginEdge = styled.div`
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

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`;

const linkStyles = {
  marginTop: '20px',
  fontSize: '14px',
  color: '#333',
  textDecoration: 'none',
  cursor: 'pointer',
  display: 'block',
};

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

const LoginBox = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setErrorMessage('아이디와 비밀번호를 입력하세요.')
            return;
        }

        const data = {
            username: email,
            password: password,
        }

        try {
            const response = await axios.post('/auth/login', data);
            const { accessToken } = response.data;
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            await axios.get('/auth/validate', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            console.log(accessToken)
            navigate('/')
        } catch (error) {
            console.error(error)
            setErrorMessage(
                error.response?.data || '로그인 실패'
            )
        }
    }

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
                    onChange={e => setEmail(e.target.value)}
                    placeholder="아이디"
                />
                <InputBox
                    type="password"
                    id="password"
                    width={300}
                    height={40}
                    fontSize={15}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="비밀번호"
                />
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <Button type="submit">로그인</Button>
            </Form>

            <GoogleButton>
                <img
                    src={GoogleIcon}
                    alt="Google Logo"
                    style={{ width: '20px', marginRight: '10px' }}
                />
                <span>Sign With Google</span>
            </GoogleButton>

            <Link to="/register" style={linkStyles}>
                회원가입하기
            </Link>
        </LoginEdge>
    );
};

export default LoginBox;
