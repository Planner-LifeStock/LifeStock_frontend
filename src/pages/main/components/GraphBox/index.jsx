import styled from 'styled-components';
import { act, useState } from 'react';

import OptionButton from '../../../../components/OptionButton';
import UpDownText from '../../../../components/UpDownText';
import ApexChart from '../ApexChart';
import ChartCalendar from '../ChartCalendar';

import { useUser } from '../../../../hooks/useUser';
import { useCompanyData } from '../../../../hooks/useCompanyData';
import { useChartData } from '../../../../hooks/useChart';

import LoadingSpinner from '../../../../styles/LoadingSpinner';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  min-height: 60px;
  margin-left: 10px;
  margin-right: 10px;
`;

function GraphBox() {
  const buttonArr = ['차트', '캘린더'];
  const [currentOption, setCurrentOption] = useState('차트');

  const { companyList, activeCompany, setActiveCompany, totalPurchaseAmount, unrealizedProfitLoss } = useCompanyData();
  const { chartData } = useChartData();

  if (!activeCompany) {
    return <LoadingSpinner />;
  }

  if (!chartData || !chartData.chartList || chartData.chartList.length === 0) {
    return <LoadingSpinner />;
  }

  const realValue = activeCompany.openStockPrice * (chartData.chartList[0].close / chartData.chartList[0].open - 1);

  return (
    <Container>
      <TitleBox style={{ marginTop: '20px', marginBottom: '50px' }}>
        <div style={{ display: 'flex' }}>
          <img src={activeCompany.logo.url} height="130px" width="130px" style={{ borderRadius: '100%', marginRight: 8 }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  fontSize: 50,
                  fontWeight: 600,
                  marginRight: 20,
                  marginLeft: '30px',
                  whiteSpace: 'nowrap',
                  maxWidth: '300px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {activeCompany.name}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '30px' }}>
              <div
                style={{
                  fontSize: '30px',
                  fontWeight: 'bold',
                  marginLeft: 'auto',
                  color: chartData.chartList[0].changeRate === 0 ? 'gray' : chartData.chartList[0].changeRate > 0 ? 'red' : 'blue',
                }}
              >
                <span style={{
                  fontSize: '30px',
                  fontWeight: 'bold',
                  marginRight: '20px'}}>{`${(chartData.chartList[0].close).toLocaleString()}원`}</span>
                {chartData.chartList[0].changeRate > 0 ? `+${Math.floor(realValue).toLocaleString()}원` : `${Math.floor(realValue).toLocaleString()}원`}
              </div>
              <div
                style={{
                  fontSize: '30px',
                  fontWeight: 'bold',
                  color: chartData.chartList[0].changeRate === 0 ? 'gray' : chartData.chartList[0].changeRate > 0 ? 'red' : 'blue',
                }}
              >
                (
                {chartData.chartList[0].changeRate > 0
                  ? `+${chartData.chartList[0].changeRate.toFixed(2)}`
                  : chartData.chartList[0].changeRate.toFixed(2)}
                %)
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: '400px', display: 'flex' }}>
          <OptionButton OptionList={buttonArr} currentState={currentOption} SetState={setCurrentOption} />
        </div>
      </TitleBox>
      <div style={{ height: '100%' }}>{currentOption === '차트' ? <ApexChart /> : <ChartCalendar />}</div>
    </Container>
  );
}

export default GraphBox;
