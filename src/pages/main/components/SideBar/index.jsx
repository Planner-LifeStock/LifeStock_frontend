import styled from 'styled-components';
import CompanyList from '../CompanyList';
import UpDownText from '../../../../components/UpDownText';
import CreateCompany from '../CreateComapnyModal';
import { useUser } from '../../../../hooks/useUser.jsx';
import { useCompanyData } from '../../../../hooks/useCompanyData.jsx';
import { useChartData } from '../../../../hooks/useChart.jsx';
import LoadingSpinner from '../../../../styles/LoadingSpinner.jsx';
import { useState } from 'react';

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: -5px 0 10px 0 rgba(0, 0, 0, 0.3);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: auto; /* 부모 컨테이너 너비에 맞게 */
  background-color: #f6f7f9;
  padding: 20px 16px;
  flex-grow: 1;
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

const CompanyListWrapper = styled.div`
  min-height: 760px;
  max-height: 760px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 10px;
  width: 100%; /* 부모 컨테이너 너비에 맞게 */
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
`;

const CloseButton = styled.button`
  margin-top: 15px;
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SideBar = () => {
  const { userData, setUserData, totalAssets, setTotalAssets } = useUser();
  const { companyList, activeCompany, setActiveCompany, totalPurchaseAmount, unrealizedProfitLoss } = useCompanyData();
  const { chartData } = useChartData();

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  if (!chartData || !chartData.chartList || chartData.chartList.length === 0) {
    return <LoadingSpinner />;
  }

  if (!userData || !activeCompany || !companyList) return <LoadingSpinner />;

  return (
    <ContainerWrapper>
      <Container>
        <div style={{ width: '100%' }}>
          <div style={{ borderBottom: 'solid 1px', marginBottom: 30, width: '100%' }}>
            <Title>{userData.displayName}님의 보유 주식</Title>
            <TotalAssets>
              <div>{`총 ${(totalPurchaseAmount + unrealizedProfitLoss).toLocaleString()}원`}</div>
              <UpDownText standard={totalPurchaseAmount} comparision={totalPurchaseAmount + unrealizedProfitLoss} />
            </TotalAssets>
            <CompanyListWrapper>
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
            </CompanyListWrapper>
          </div>
          <CreateCompany onClick={() => setShowModal(true)}>회사 상장하기</CreateCompany>
        </div>
      </Container>

      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <p>{modalMessage || '회사 상장 정보를 입력해주세요.'}</p>
            <CloseButton onClick={() => setShowModal(false)}>확인</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </ContainerWrapper>
  );
};

export default SideBar;
