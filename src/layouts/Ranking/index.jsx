import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh
`
// 가장 큰 컨테이너
const RankContainer = styled.div`
    position: absolute;
    top: 38px;
    left: 806px;

    width: 1054px;
    height: 800px;

    display: flex;
    justify-content: flex-end;
`
// 사용지 정보 컨테이너
const UserContainer = styled.div`
    position: absolute;
    
    width: 1054px;
    height: 126px;

    display: flex;
    align-items: center;
    
    background-color: #EFEFEF;
    border-radius: 16px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
`
// 현재 시각 텍스트 스타일
const TimeFont = styled.div`
  color : #000000;
  opacity : 0.3;
  font-weight: bold;
  font-size: 32px;
`
// 등수가 나오는 원과 등수 텍스트 스타일
const Circle = styled.div`
    position: absolute;
    top: 23px;
    left: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 80px;

    background-color: #3182F6;
    border-radius: 50%;
`

const CircleFont = styled.div`
    color: #FFFFFF;
    font-size: 48px;
    font-weight: bold;
    background: none;
    border: none;
`
// 이름 텍스트 및 금액 텍스트 스타일
const NameFont = styled.div`
    position: absolute;
    left: 140px;

    width: 175px;
    height: 126px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 48px;
    font-weight: bold;
`

const AmountFont = styled.div`
    position: absolute;
    left: 345px;

    font-size: 48px;
    font-weight: bold;
`

const StockFont = styled.div`
    position: absolute;
    left: 717px;

    font-size: 32px;
    font-weight: bold;
    color: #0038FF;
`

let date = new Date();
const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}
     ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;

const rankings = [
    { rank: 1, nickname: '닉네임', amount: '123,456,789원', change: '-275,000(-13.75%)' },
    { rank: 2, nickname: '닉네임', amount: '123,456,789원', change: '-275,000(-13.75%)' },
    { rank: 3, nickname: '닉네임', amount: '123,456,789원', change: '-275,000(-13.75%)' },
    { rank: 4, nickname: '닉네임', amount: '123,456,789원', change: '-275,000(-13.75%)' },
    { rank: 5, nickname: '닉네임', amount: '123,456,789원', change: '-275,000(-13.75%)' },
];

function Ranking()
{
    return (
      <Container>
        <RankContainer>
          <TimeFont>{formattedDate} 기준</TimeFont>
          {rankings.map((item, index) => (
            <UserContainer key={index} style={{ top: `${65 + index * 152}px` }}>
              <Circle>
                <CircleFont>{item.rank}</CircleFont>
              </Circle>
              <NameFont>{item.nickname}</NameFont>
              <AmountFont>{item.amount}</AmountFont>
              <StockFont>{item.change}</StockFont>
            </UserContainer>
          ))}
        </RankContainer>
      </Container>
    );
  }

export default Ranking;