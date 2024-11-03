import styled from 'styled-components'

import Ranking from './components/Ranking'
import UserInfo from './components/UserInfo'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`

const RankPage = () => {
  return (
    <>
      <Container>
        <UserInfo/>
        {/* <Ranking/> */}
      </Container>
    </>
  )
}

export default RankPage
