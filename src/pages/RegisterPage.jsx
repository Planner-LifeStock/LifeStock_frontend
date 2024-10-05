import React, { useState } from 'react'
import styled from 'styled-components'
import RegisterBox from '../layouts/RegisterBox'

// 스타일링
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #6c89e6;
`

const RegisterPage = () => {
  return (
    <>
      <PageContainer>
        <RegisterBox/>
      </PageContainer>
    </>
  )
}

export default RegisterPage
