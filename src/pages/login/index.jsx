import React from 'react'
import styled from 'styled-components'

import LoginBox from './components/LoginBox'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  
  background-color: ${(props) => props.theme.colors.blue.primary};
`

const LoginPage = () => {
  return (
    <>
      <Container>
          <LoginBox/>
      </Container>
    </>
  )
}

export default LoginPage