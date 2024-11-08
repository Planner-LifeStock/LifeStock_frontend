import styled from 'styled-components';
import React from 'react';

import { useUser } from '../../../../hooks/useUser';
import { useCompanyData } from '../../../../hooks/useCompanyData';

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
  max-width: 120px; // 최대 너비 설정
`;

function SalesRecord() {
  const levelMap = { HIGH: '상', MEDIUM: '중', LOW: '하' };

  const { userData } = useUser();
  const { soldCompany } = useCompanyData();

  console.log(soldCompany);

  return (
    <div style={{ padding: '0px 50px' }}>
      <Container style={{ borderBottom: 'solid 3px', marginBottom: '10px' }}>
        <Header>회사명</Header>
        <Header>회사 설명</Header>
        <Header>상장일</Header>
        <Header>매각일</Header>
        <Header>상장가</Header>
        <Header>발행주식 수</Header>
        <Header>난이도</Header>
        <Header>상장비용</Header>
        <Header>회사매각가격</Header>
        <Header>회사매각손익</Header>
      </Container>
      <Container>
        {(soldCompany || []).map(data => (
          <React.Fragment key={data.id}>
            <Header style={{ color: 'black' }}>{data.name}</Header>
            <Header style={{ color: 'black' }}>{data.description || '정보 없음'}</Header>
            <Header style={{ color: 'black' }}>{data.listedDate || '정보 없음'}</Header>
            <Header style={{ color: 'black' }}>{data.saleDate || '정보 없음'}</Header>
            <Header style={{ color: 'black' }}>{data.initialStockPrice}</Header>
            <Header style={{ color: 'black' }}>{data.initialStockQuantity || 0}</Header>
            <Header style={{ color: 'black' }}>{levelMap[data.level] || 0}</Header>
            <Header style={{ color: 'black' }}>{data.listingCost || '정보 없음'}</Header>
            <Header style={{ color: 'black' }}>{data.salePrice || '정보 없음'}</Header>
            <Header style={{ color: 'black' }}>{data.profitLoss || '정보 없음'}</Header>
          </React.Fragment>
        ))}
      </Container>
    </div>
  );
}

export default SalesRecord;
