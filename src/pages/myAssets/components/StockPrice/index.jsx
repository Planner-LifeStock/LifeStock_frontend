import styled from 'styled-components';

const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

// 스타일을 적용하는 로직을 Header 외부에서 처리
const StyledHeader = styled.div`
  font-size: 30px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ color }) => color};
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DisplayWithStyle = ({ value, isTotalPurchase }) => {
  const displayValue = isTotalPurchase ? value.toLocaleString() : value > 0 ? `+${value.toLocaleString()}` : value.toLocaleString();

  // `isTotalPurchase`에 따른 색상 결정 로직을 여기에서 처리
  const color = isTotalPurchase ? 'black' : value > 0 ? 'red' : value < 0 ? 'blue' : 'gray';

  return <StyledHeader color={color}>{displayValue}</StyledHeader>;
};

const TotalReturnRate = ({ rate }) => {
  const displayRate = rate > 0 ? `+${rate.toFixed(1)}` : rate.toFixed(1);
  const color = rate > 0 ? 'red' : rate < 0 ? 'blue' : 'gray';

  return <StyledHeader color={color}>{displayRate}%</StyledHeader>;
};

const StockPrice = ({ totalPurchaseAmount, realizedProfitLoss, unrealizedProfitLoss, totalProfitLoss, totalEvaluationAmount, totalReturnRate }) => (
  <MenuContainer>
    <DisplayWithStyle value={totalPurchaseAmount} isTotalPurchase={true} />
    <DisplayWithStyle value={realizedProfitLoss * 100} />
    <DisplayWithStyle value={unrealizedProfitLoss} />
    <DisplayWithStyle value={totalProfitLoss} />
    <DisplayWithStyle value={totalEvaluationAmount} />
    <TotalReturnRate rate={totalReturnRate} />
  </MenuContainer>
);

export default StockPrice;
