import styled from 'styled-components';

import SumList from '../../../../function/calculation/sumList';
import { useCompanyData } from '../../../../hooks/useCompanyData';

const GrayText = styled.div`
  font-size: ${(props) => props.theme.font.size.primary};
  font-weight: ${(props) => props.theme.font.weight.extraBold};
  color: ${(props) => props.theme.colors.grey.light};
`;

function TotalSum() {
  const { companyList } = useCompanyData();
  
  return (
    <GrayText>
      총 {SumList({ data: companyList, type: 'currentStockPrice' }).toLocaleString()}원
    </GrayText>
  );
}

export default TotalSum;
