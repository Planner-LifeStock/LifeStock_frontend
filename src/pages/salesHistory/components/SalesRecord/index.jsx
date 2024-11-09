import styled from 'styled-components';
import React from 'react';

import { useUser } from '../../../../hooks/useUser';
import { useCompanyData } from '../../../../hooks/useCompanyData';

import LoadingSpinner from '../../../../styles/LoadingSpinner';

import UpDownText from '../../../../components/UpDownText';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 10px; // 열 사이의 간격
`;

const Header = styled.div`
  font-size: ${props => props.theme.font.size.large};
  font-weight: ${props => props.theme.font.weight.bold};
  color: ${props => props.theme.colors.blue.primary};
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 150px; // 최대 너비 설정
`;

function SalesRecord() {
  const levelMap = { HIGH: '상', MEDIUM: '중', LOW: '하' };

  const { userData } = useUser();
  const { soldCompany } = useCompanyData();

  if (!userData || !soldCompany) {
    return <LoadingSpinner />;
  }

  return (
    <div style={{ padding: '0px 50px' }}>
      <Container style={{ borderBottom: 'solid 3px', marginBottom: '10px' }}>
        <Header>회사명</Header>
        <Header>회사 설명</Header>
        <Header>상장일</Header>
        <Header>매각일</Header>
        <Header>상장가(1주)</Header>
        <Header>발행주식 수</Header>
        <Header>난이도</Header>
        <Header>매수금액</Header>
        <Header>매도금액</Header>
        <Header>회사매각손익(1주)</Header>
      </Container>
      <Container>
        {soldCompany.map((data) => (
          <React.Fragment key={data.id}>
            <Header style={{ color: 'black' }}>{data.name}</Header>
            <Header style={{ color: 'black' }}>{data.description || '설명 없음'}</Header>
            <Header style={{ color: 'black' }}>{new Date(data.createdAt).toLocaleDateString("ko-KR") || '정보 없음'}</Header>
            <Header style={{ color: 'black' }}>{new Date(data.listedDate).toLocaleDateString("ko-KR") || '정보 없음'}</Header>
            <Header style={{ color: 'black' }}>{(data.initialStockPrice).toLocaleString() || 0}원</Header>
            <Header style={{ color: 'black' }}>{(data.initialStockQuantity).toLocaleString() || 0}주</Header>
            <Header style={{ color: 'black' }}>{levelMap[data.level] || '정보 없음'}</Header>
            <Header style={{ color: 'black' }}>{(data.investmentAmount).toLocaleString() || 0}원</Header>
            <Header style={{ color: 'black' }}>{(data.listedStockPrice*100).toLocaleString() || 0}원</Header>
            <Header style={{ color: 'black' }}>
            {data.initialStockPrice && data.listedStockPrice
                ?
                <>
                  <UpDownText standard={data.investmentAmount} comparision={(data.listedStockPrice)*100}/>
                </> 
                : '0원'}
            </Header>
          </React.Fragment>
        ))}
      </Container>
    </div>
  );
}

export default SalesRecord;