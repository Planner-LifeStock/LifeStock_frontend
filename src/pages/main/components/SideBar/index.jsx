import styled from 'styled-components';
import CompanyList from '../CompanyList';
import UpDownText from '../../../../components/UpDownText';
import CreateCompany from '../CreateComapnyModal';
import { useUser } from '../../../../hooks/useUser.jsx';
import { useCompanyData } from '../../../../hooks/useCompanyData.jsx';
import { useChartData } from '../../../../hooks/useChart.jsx';
import LoadingSpinner from '../../../../styles/LoadingSpinner.jsx';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 10px 16px;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  justify-content: start;
  font-size: ${({ theme }) => theme.font.size.xLarge};
  font-weight: ${({ theme }) => theme.font.weight.extraBold};
  margin-bottom: 3px;
  width: 100%;
`;

const TotalAssets = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 24px;
  font-weight: bold;
  color: grey;
  width: 100%;
`;

const SideBar = () => {
  const { userData } = useUser();
  const { companyList, activeCompany, setActiveCompany, totalPurchaseAmount, unrealizedProfitLoss } = useCompanyData();
  const { chartData } = useChartData();

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  if (!chartData || !chartData.chartList || chartData.chartList.length === 0) {
    return <LoadingSpinner />;
  }

  if (!userData || !activeCompany || !companyList) return <LoadingSpinner />;

  return (
      <Container>
        <div style={{ marginBottom: 30, width: '100%' }}>
          <Title style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxwidth: '100%'
          }}>
            {userData.displayName}님의 보유 스톡옵션
          </Title>
          <TotalAssets>
            <div>{`총 ${(totalPurchaseAmount + unrealizedProfitLoss).toLocaleString()}원`}</div>
            <UpDownText standard={totalPurchaseAmount} comparision={totalPurchaseAmount + unrealizedProfitLoss} />
          </TotalAssets>
          {companyList.map((item, index) => (
            <CompanyList
              key={index}
              name={item.name}
              logo={item.logo.url}
              companyId={item.id}
              initialStockQuantity={item.initialStockQuantity}
              initialStockPrice={item.initialStockPrice}
              investmentAmount={item.investmentAmount}
              onClick={() => setActiveCompany(item)}
            />
          ))}
        </div>
        <CreateCompany onClick={() => setShowModal(true)}>회사 상장하기</CreateCompany>
      </Container>
  );
};

export default SideBar;
