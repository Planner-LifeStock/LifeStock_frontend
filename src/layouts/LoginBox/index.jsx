import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import useFetch from "../../hooks/useFetch";
import Button from "../../components/Button";
import InputBox from "../../components/InputBox";
import { GoogleIcon } from "../../assets";

const LoginEdge = styled.div`
  width: 400px;
  padding: 40px;
  background-color: white;
  border-radius: 10px;
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
  font-weight: bold;
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

const Label = styled.label`
  text-align: left;
  margin-bottom: 5px;
  font-size: 16px;
  color: #333;
`

// const LoginButton = styled.button`
//   padding: 12px;
//   background-color: #4285f4;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   font-size: 16px;
//   cursor: pointer;
//   margin-top: 10px;
// `

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
`




const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`

const SignUpLink = styled.a`
  margin-top: 20px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
`

const linkStyles = {
  marginTop: '20px',
  fontSize: '14px',
  color: '#333',
  textDecoration: 'none',
  cursor: 'pointer',
  display: 'block',
}


const LoginBox = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
      
    const handleLogin = e => {
        e.preventDefault()
        if (!email || !password) {
        setErrorMessage('이메일과 비밀번호를 입력하세요.')
        return
        }
        console.log('로그인 시도:', { email, password })
        setErrorMessage('로그인 실패')
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
                width = {300}
                height={40}
                fontSize={15}
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="아이디"
            />
            <InputBox
                type="password"
                id="password"
                width = {300}
                height={40}
                fontSize={15}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="비밀번호"
            />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <Button onClick={handleLogin}>로그인</Button> 
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
        )
    }

export default LoginBox