import styled from 'styled-components';
import SumList from '../../function/calculation/sumList';
import { useCompanyData } from '../../hooks/useCompanyData';

const GrayText = styled.div`
  font-size: 16px;
  font-weight: 800;
  color: #8b95a1;
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
