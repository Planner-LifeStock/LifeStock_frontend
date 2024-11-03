import styled from 'styled-components'
import UpDownText from '../../../../components/UpDownText'

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

  background-color:  ${(props) => props.theme.colors.grey.light};
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
const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}
     ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`

function Ranking({ data }) {
  return (
    <Container>
      <TimeFont>{formattedDate} 기준</TimeFont>
      <Container
        style={{
          padding: '10px',
          backgroundColor: '#D3D3D3',
          maxHeight: '600px',
          maxWidth: '900px',
          overflowY: 'auto',
        }}
        >
        {data.map(({ username, chartData }, index) => (
          <UserContainer
            key={index}
            username={username}
            chartData={chartData}
            style={{ marginTop: index === 0 ? '0px' : '26px' }}
          >
            <Circle>
              <CircleFont>{index + 1}</CircleFont>
            </Circle>
            <InfoFont>{username}</InfoFont>
            <InfoFont style={{ marginRight: '30px' }}>
              {chartData[chartData.length - 1][2].toLocaleString()}원
            </InfoFont>
            <UpDownText
              standard={chartData[chartData.length - 1][2]}
              comparision={chartData[chartData.length - 1][3]}
              fontSize={32}
            />
          </UserContainer>
        ))}
      </Container>
      <UserContainer style={{ marginRight: '10px' }}>
        <Circle>
          <CircleFont>1</CircleFont>
        </Circle>
        <InfoFont>내 랭킹</InfoFont>
        <InfoFont>123,455,132원</InfoFont>
      </UserContainer>
    </Container>
  )
}

export default Ranking
