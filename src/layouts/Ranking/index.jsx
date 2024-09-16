import styled from "styled-components";
import UpDownText from "../../components/UpDownText";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
`

const UserContainer = styled.div`
    margin-top: 26px;
    padding: 10px 30px;
    margin-left: auto;
    min-width: 800px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    background-color: #EFEFEF;
    border-radius: 16px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
`

const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 100%;
    height: 70px;
    width: 70px;

    background-color: #3182F6;
`

const CircleFont = styled.div`
    color: #FFFFFF;
    font-size: 48px;
    font-weight: bold;
    background: none;
    border: none;
`

const InfoFont = styled.div`
    margin-left: 30px;
    font-size: 48px;
    font-weight: bold;
`

const TimeFont = styled.div`
    color : #000000;
    opacity : 0.3;
    font-weight: bold;
    font-size: 32px;
    margin-left: auto;
`

let date = new Date();
const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}
     ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;

function Ranking({ data })
{
  return (
    <Container>
        <TimeFont>{formattedDate} 기준</TimeFont>
        <Container style={{padding: "10px",
          backgroundColor: "#D3D3D3",
          maxHeight: "600px",
          maxWidth: "900px",
          overflowY: "auto"}}>
        {data.map(({username, chartData}, index) => (
          <UserContainer key={index} username={username} chartData={chartData}
            style={{marginTop: index === 0 ? '0px' : '26px'}}>
            <Circle><CircleFont>{index+1}</CircleFont></Circle>
            <InfoFont>{username}</InfoFont>
            <InfoFont style={{marginRight: "30px"}}>{chartData[chartData.length-1][2].toLocaleString()}원</InfoFont>
            <UpDownText
              standard={chartData[chartData.length-1][2]}
              comparision={chartData[chartData.length-1][3]}
              fontSize={32}/>
          </UserContainer>
        ))}
        </Container>
        <UserContainer style={{marginRight: "10px"}}>
          <Circle><CircleFont>1</CircleFont></Circle>
          <InfoFont>내 랭킹</InfoFont>
          <InfoFont>1234,55132원</InfoFont>
        </UserContainer>
    </Container>  
  );
}

export default Ranking;