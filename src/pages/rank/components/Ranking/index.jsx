import React from 'react';
import styled from 'styled-components';
import UpDownText from '../../../../components/UpDownText';

import { useRanking } from '../../../../hooks/useRanking';
import { useUser } from '../../../../hooks/useUser';

import LoadingSpinner from '../../../../styles/LoadingSpinner';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${props => props.theme.border.radius.small};
`;

const UserContainer = styled.div`
  margin-top: 26px;
  padding: 10px 30px;
  margin-left: auto;
  min-width: 800px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  background-color: ${props => props.theme.colors.grey.border};
  border-radius: ${props => props.theme.border.radius.small};
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  height: 83px;
  width: 83px;
  background-color: ${props => props.theme.colors.blue.primary};
  margin-right: 20px; /* 이름과의 간격 추가 */
`;

const CircleFont = styled.div`
  color: #ffffff;
  font-size: ${props => (props.isLargeNumber ? '35px' : '45px')}; /* 숫자가 클 경우 폰트 크기 줄임 */
  font-weight: ${props => props.theme.font.weight.bold};
  background: none;
  border: none;
`;

const InfoFont = styled.div`
  flex: 1; /* 가변적인 너비를 설정하여 균등 분배 */
  font-size: 42px;
  font-weight: ${props => props.theme.font.weight.bold};
  text-align: left;
  margin-right: 20px; /* 총 자산과의 간격 추가 */
`;

const MoneyFont = styled.div`
  font-size: 42px;
  font-weight: ${props => props.theme.font.weight.bold};
  text-align: right;
  margin-right: 20px;
  min-width: 200px; /* 일정한 너비 설정 */
`;

const UpDownWrapper = styled.div`
  min-width: 100px; /* UpDownText 영역 너비 */
  text-align: right;
`;

const TimeFont = styled.div`
  color: ${props => props.theme.colors.grey.light};
  opacity: 0.3;
  font-size: 32px;
  font-weight: ${props => props.theme.font.weight.bold};
  margin-left: auto;
`;

let date = new Date();
const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

function Ranking() {
  const { ranking, setRanking, userRanking, setUserRanking } = useRanking();
  const { userData, totalAssets } = useUser();

  if (!Array.isArray(ranking) || !userData) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      <TimeFont style={{ marginTop: '20px' }}>{formattedDate} 00:00 기준</TimeFont>
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
          <UserContainer key={index} style={{ marginTop: index === 0 ? '0px' : '26px', minWidth: '880px' }}>
            <Circle>
              <CircleFont isLargeNumber={(index + 1).toString().length >= 3}>{index + 1}</CircleFont>
            </Circle>
            <InfoFont>{item.userRealName}</InfoFont>
            <MoneyFont>{item.totalAssets.toLocaleString()}원</MoneyFont>
            <UpDownWrapper>
              <UpDownText
                standard={100000000} // 기준값 설정, 1억
                comparision={item.totalAssets} // 비교할 총 자산 값
                fontSize={20}
              />
            </UpDownWrapper>
          </UserContainer>
        ))}
      </Container>
      <UserContainer style={{ marginRight: '10px', minWidth: '880px' }}>
      {userRanking === -1 ? (
              <InfoFont style={{textAlign: 'center'}}>오늘 자정이 지나면 랭킹에 반영돼요!</InfoFont>
            ) : (
              <>
                <Circle>
                  <CircleFont isLargeNumber={(userRanking + 1).toString().length >= 3}>
                    {userRanking + 1}
                  </CircleFont>
                </Circle>
                <InfoFont>{userData.realName}</InfoFont>
                <MoneyFont>{totalAssets.toLocaleString()}원</MoneyFont>
                <UpDownWrapper>
                  <UpDownText
                    standard={100000000} // 기준값 설정, 1억
                    comparision={totalAssets} // 현재 유저의 총 자산
                    fontSize={25}
                  />
                </UpDownWrapper>
              </>
            )}
      </UserContainer>
    </Container>
  );
}

export default Ranking;