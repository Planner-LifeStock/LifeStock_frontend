import styled from 'styled-components'
import { useState } from 'react'
import UserInfo from '../layouts/UserInfo'
import Ranking from '../layouts/Ranking'
import TopBar from '../layouts/TopBar'

const Container = styled.div`
  display: flex;
  padding: 10px 0px;
  justify-content: space-around;
`

const RankPage = () => {
  return (
    <>
      <TopBar />
      <Container>
        <UserInfo />
        <Ranking/>
      </Container>
    </>
  )
}

export default RankPage

