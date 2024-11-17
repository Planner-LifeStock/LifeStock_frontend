import styled from 'styled-components';
import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../../hooks/useUser';
import { useCompanyData } from '../../../../hooks/useCompanyData';

import LoadingSpinner from '../../../../styles/LoadingSpinner';
import StockPrice from '../StockPrice';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
`;

const InfoFont = styled.div`
  font-size: 60px;
  font-weight: ${props => props.theme.font.weight.bold};
`;

const CheckSellButton = styled.button`
  background-color: ${props => props.theme.colors.blue.primary};
  border-radius: ${props => props.theme.border.radius.small};
  border: none;
  transition: all 0.3s ease;
  margin-bottom: 10px;
  margin-left: auto;

  width: 200px;
  height: 40px;

  &:focus {
    border: none;
    outline: none;
  }

  &:hover {
    opacity: 0.5;
  }
`;

const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 5px; // 열 사이의 간격
`;

const Header = styled.div`
  font-size: 30px;
  font-weight: ${props => props.theme.font.weight.bold};
  color: ${props => props.theme.colors.blue.primary};
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  // max-width: 150px; << 이거 수정필요
`;

const AssetInfo = () => {
  const { userData, totalAssets, setUserData } = useUser();
  const {
    companyList,
    soldCompany,
    totalPurchaseAmount,
    realizedProfitLoss,
    unrealizedProfitLoss,
    totalProfitLoss,
    totalEvaluationAmount,
    totalReturnRate,
    seedMoney,
    availablePurchaseAmount,
  } = useCompanyData();
  const navigate = useNavigate();

  if (!companyList) {
    return <LoadingSpinner />;
  }

  const returnRate = (unrealizedProfitLoss / totalPurchaseAmount) * 100;

  return (
    <div style={{backgroundColor: 'white'}}>
      <Container>
        <InfoFont style={{marginTop: '30px'}}>{userData.realName}님의 자산 현황</InfoFont>
        <CheckSellButton style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 'bold',marginTop: '-69px'}} onClick={() => navigate('/salesrecords')}>
          주식 매매 기록
        </CheckSellButton>

        <div style={{ padding: '10px', marginTop: '30px' }}>
          <MenuContainer style={{ borderBottom: 'solid 3px', marginBottom: '10px' }}>
            <Header>총평가</Header>
            <Header>총매입</Header>
            <Header>투자가능금액</Header>
            <Header>실현손익</Header>
            <Header>평가손익</Header>
            <Header>총손익</Header>
            <Header>수익률</Header>
            <Header>총수익률</Header>
          </MenuContainer>
          <StockPrice
            totalEvaluationAmount={totalEvaluationAmount}
            totalProfitLoss={totalProfitLoss}
            totalPurchaseAmount={totalPurchaseAmount}
            realizedProfitLoss={realizedProfitLoss}
            availablePurchaseAmount={availablePurchaseAmount}
            unrealizedProfitLoss={unrealizedProfitLoss}
            returnRate={returnRate}
            totalReturnRate={totalReturnRate}
          />
        </div>
      </Container>
    </div>
  );
};

export default AssetInfo;
