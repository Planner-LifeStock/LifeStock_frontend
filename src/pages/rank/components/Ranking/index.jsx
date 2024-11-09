import styled from 'styled-components'
import UpDownText from '../../../../components/UpDownText'

import { useRanking } from '../../../../hooks/useRanking'
import { useUser } from '../../../../hooks/useUser'

import LoadingSpinner from '../../../../styles/LoadingSpinner'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-radius:  ${(props) => props.theme.border.radius.small};
`

const UserContainer = styled.div`
  margin-top: 26px;
  padding: 10px 30px;
  margin-left: auto;
  min-width: 800px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color:  ${(props) => props.theme.colors.grey.border};
  border-radius: ${(props) => props.theme.border.radius.small};
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
`

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;
  height: 70px;
  width: 70px;

  background-color: ${(props) => props.theme.colors.blue.primary};
`

const CircleFont = styled.div`
  color: #ffffff;
  font-size: 48px;
  font-weight: ${(props) => props.theme.font.weight.bold};

  background: none;
  border: none;  
`

const InfoFont = styled.div`
  margin-left: 30px;

  font-size: 48px;
  font-weight: ${(props) => props.theme.font.weight.bold};
`

const TimeFont = styled.div`
  color: ${(props) => props.theme.colors.grey.light};
  opacity: 0.3;
  
  font-size: 32px;
  font-weight: ${(props) => props.theme.font.weight.bold};
  
  margin-left: auto;
`

let date = new Date()
const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`

function Ranking({ data }) {
  const { ranking, setRanking, userRanking, setUserRanking } = useRanking();
  const { userData, totalAssets } = useUser();

  if (!Array.isArray(ranking) || !userData) {
    return <LoadingSpinner/>
  }

  return (
    <Container>
      <TimeFont style={{marginTop: "20px"}}>{formattedDate} 00:00 기준</TimeFont>
      <Container
        style={{
          padding: '10px',
          backgroundColor: '#D3D3D3',
          maxHeight: '70vh',
          maxWidth: '900px',
          overflowY: 'auto',
        }}
        >
        {ranking.map((item, index) => (
          <UserContainer
            key={index}
            style={{ marginTop: index === 0 ? '0px' : '26px', minWidth: '880px',}}
          >
            <Circle>
              <CircleFont>{index + 1}</CircleFont>
            </Circle>
            <InfoFont>{item.userRealName}</InfoFont>
            <InfoFont style={{ marginRight: '30px' }}>
              {item.totalAssets.toLocaleString()}원
            </InfoFont>
            {/* <UpDownText
              standard={chartData[chartData.length - 1][2]}
              comparision={chartData[chartData.length - 1][3]}
              fontSize={32}
            /> */}
          </UserContainer>
        ))}
      </Container>
      <UserContainer style={{ marginRight: '10px', minWidth: '880px' }}>
        <Circle>
          <CircleFont>{userRanking + 1}</CircleFont>
        </Circle>
        <InfoFont>{userData.realName}</InfoFont>
        <InfoFont>{totalAssets.toLocaleString()}원</InfoFont>
      </UserContainer>
    </Container>
  )
}

export default Ranking
