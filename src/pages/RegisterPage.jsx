import React, { useState } from 'react'
import styled from 'styled-components'

const RegisterPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleRegister = e => {
    e.preventDefault()
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('모든 빈칸을 입력하세요.')
      return
    }
    if (password !== confirmPassword) {
      setErrorMessage('비밀번호가 일치하지 않습니다.')
      return
    }
    console.log('회원가입 시도:', { name, email, password })
    setErrorMessage('회원가입 성공')
  }

  return (
    <PageContainer>
      <RegisterBox>
        <Title>신개념 주식게임 투두리스트</Title>
        <MainTitle>LIFE STOCK</MainTitle>
        <SubTitle>계정등록</SubTitle>

        <Form onSubmit={handleRegister}>
          <Label htmlFor="name">이름</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="홍길동"
          />
          <Label htmlFor="email">아이디</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="lifeStock"
          />
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="******"
          />
          <Label htmlFor="confirmPassword">비밀번호 확인</Label>
          <Input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder="******"
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <RegisterButton type="submit">회원가입</RegisterButton>
        </Form>

        <LoginLink href="/login">로그인 화면 돌아가기</LoginLink>
      </RegisterBox>
    </PageContainer>
  )
}

// 스타일링
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #6c89e6;
`

const RegisterBox = styled.div`
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
  gap: 10px;
`

const Label = styled.label`
  text-align: left;
  margin-bottom: 5px;
  font-size: 16px;
  color: #333;
`

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  background-color: #f9f9f9;
`

const RegisterButton = styled.button`
  padding: 12px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
`

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`

const LoginLink = styled.a`
  margin-top: 20px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  display: block;
`

export default RegisterPage
