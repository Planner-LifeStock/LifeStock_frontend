import styled from 'styled-components';

import CompanyList from '../CompanyList';
import UpDownText from '../../../../components/UpDownText';
import TotalSum from '../TotalSum';
import SumList from '../../../../function/calculation/sumList';
import CreateCompany from '../CreateComapnyModal';

import { useUser } from '../../../../hooks/useUser.jsx';
import { useCompanyData } from '../../../../hooks/useCompanyData.jsx';
import { useChartData } from '../../../../hooks/useChart.jsx';

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

function SideBar() {
  const { userData, setUserData, totalAssets, setTotalAssets } = useUser();
  const { companyList, setComapnyList, activeCompany, setActiveCompany } = useCompanyData();
  const { chartData } = useChartData();

  const currentValue = SumList({ data: companyList, type: 'currentStockPrice'});
  const openValue = SumList({data: companyList, type: 'openStockPrice'});

  // if (!chartData || !chartData.chartList || chartData.chartList.length === 0) {
  //   return <div>차트 데이터를 불러오는 중...</div>;
  // }

  // if(!userData || !activeCompany || !companyList)
  //   return <div>로딩 중...</div>

  return (
    <>
      <AppWrapper>
        <Container>
          <div>
            <div style={{ borderBottom: 'solid 1px', marginBottom: 30 }}>
              {userData && activeCompany && companyList && (
                /* companyList.length > 0 && */ <>
                  <Title>{userData.displayName + '님의 종목'}</Title>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'end',
                      marginBottom: 24,
                    }}
                  >
                    <TotalSum />
                    <UpDownText
                      standard={currentValue}
                      comparision={openValue}
                    />
                  </div>
                  <div style={{ minHeight: '760px', maxHeight: '760px', overflowY: 'scroll' }}>
                    {companyList.map((item, index) => (
                      <CompanyList
                        key={index}
                        name={item.name}
                        logo={item.logo.url}
                        buyPrice={item.openStockPrice} // 시가
                        currentPrice={item.currentStockPrice} //종가
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
