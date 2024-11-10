import styled, { keyframes } from 'styled-components';

import CompanyList from '../CompanyList';
import UpDownText from '../../../../components/UpDownText';
import TotalSum from '../TotalSum';
import SumList from '../../../../function/calculation/sumList';
import CreateCompany from '../CreateComapnyModal';

import { useUser } from '../../../../hooks/useUser.jsx';
import { useCompanyData } from '../../../../hooks/useCompanyData.jsx';
import { useChartData } from '../../../../hooks/useChart.jsx';

import LoadingSpinner from '../../../../styles/LoadingSpinner.jsx';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: -5px 0 10px 0 rgba(0, 0, 0, 0.3);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  background-color: #f6f7f9;
  padding: 20px 16px;
  flex-grow: 1;
`;

const Title = styled.div`
  display: flex;
  justify-content: start;
  font-size: ${props => props.theme.font.size.xLarge};
  font-weight: ${props => props.theme.font.weight.extraBold};
  margin-bottom: 3px;
`;

const GrayText = styled.div`
  font-size: ${props => props.theme.font.size.primary};
  font-weight: ${props => props.theme.font.weight.extraBold};
  color: #8b95a1;
`;

const NoCompanyMessage = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #f0e68c;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(255, 69, 0, 0.5);
`;

function SideBar() {
  const { userData, setUserData, totalAssets, setTotalAssets } = useUser();
  const { companyList, setComapnyList, activeCompany, setActiveCompany } = useCompanyData();
  const { chartData } = useChartData();

  const currentValue = SumList({ data: companyList, type: 'currentStockPrice' });
  const openValue = SumList({ data: companyList, type: 'openStockPrice' });

  if (!chartData || !chartData.chartList || chartData.chartList.length === 0) {
    return <LoadingSpinner />;
  }

  if (!userData || !activeCompany || !companyList) return <LoadingSpinner />;

  return (
    <>
      <AppWrapper>
        <Container>
          <div>
            <div style={{ borderBottom: 'solid 1px', marginBottom: 30 }}>
              {userData && activeCompany && companyList && (
                /* companyList.length > 0 && */ <>
                  <Title>{userData.displayName + '님의 보유 주식'}</Title>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'end',
                      marginBottom: 24,
                    }}
                  >
                    <TotalSum />
                    <UpDownText standard={currentValue} comparision={openValue} />
                  </div>
                  <div style={{ minHeight: '760px', maxHeight: '760px', overflowY: 'scroll' }}>
                    {console.log(companyList)}
                    {companyList.map((item, index) => (
                      <CompanyList
                        key={index}
                        name={item.name}
                        logo={item.logo.url}
                        companyId={item.id}
                        initialStockQuantity={item.initialStockQuantity}
                        initialStockPrice={item.initialStockPrice}
                        investmentAmount={item.investmentAmount} //투자한 첫 금액
                        onClick={() => setActiveCompany(item)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <CreateCompany>회사 상장하기</CreateCompany>
          </div>
        </Container>
      </AppWrapper>
    </>
  );
}

export default SideBar;
