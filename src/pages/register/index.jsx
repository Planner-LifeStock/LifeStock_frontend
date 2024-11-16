import React from 'react'
import styled from 'styled-components'

import RegisterBox from './components/RegisterBox'
import ConsentGiven from './components/ConsentGiven'

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 100vh;

  background-color: ${(props) => props.theme.colors.blue.primary};
`

const RegisterPage = () => {
  return (
    <>
      <PageContainer>
        <ConsentGiven/>
      </PageContainer>
    </>
  )
}

export default RegisterPage
