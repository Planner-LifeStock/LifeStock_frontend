import styled from 'styled-components';

const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const Header = styled.div`
  font-size: 30px;
  font-weight: ${props => props.theme.font.weight.bold};
  color: ${({ value, isTotalPurchase }) =>
    isTotalPurchase ? 'black' : value > 0 ? 'red' : value < 0 ? 'blue' : 'gray'};
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DisplayWithStyle = ({ value, isTotalPurchase }) => {
  const displayValue = isTotalPurchase ? value.toLocaleString() : value > 0 ? `+${value.toLocaleString()}` : value.toLocaleString();
  return <Header value={value} isTotalPurchase={isTotalPurchase}>{displayValue}</Header>;
};

const TotalReturnRate = ({ rate }) => {
  const displayRate = rate > 0 ? `+${rate.toFixed(1)}` : rate.toFixed(1);
  return (
    <Header value={rate}>
      {displayRate}%
    </Header>
  );
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