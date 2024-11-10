import styled from 'styled-components';

import SumList from '../../../../function/calculation/sumList';
import { useCompanyData } from '../../../../hooks/useCompanyData';
import { useUser } from '../../../../hooks/useUser';

const GrayText = styled.div`
  font-size: ${props => props.theme.font.size.primary};
  font-weight: ${props => props.theme.font.weight.extraBold};
  color: ${props => props.theme.colors.grey.light};
`;

function TotalSum() {
  const { companyList } = useCompanyData();
  const { userData, setUserData, totalAssets, setTotalAssets } = useUser();

  const currentValue = SumList({ data: companyList, type: 'currentStockPrice' }); // 현재가

  return <GrayText>총 {currentValue.toLocaleString()}원</GrayText>;
}

export default TotalSum;
