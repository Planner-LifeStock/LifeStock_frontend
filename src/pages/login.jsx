import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GoogleIcon } from '../assets'
import LoginBox from '../layouts/LoginBox'

// Styled Components
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #6c89e6;
`

const LoginPage = () => {
  return (
    <>
      <PageContainer>
          <LoginBox/>
      </PageContainer>
    </>
  )
}

export default LoginPage
