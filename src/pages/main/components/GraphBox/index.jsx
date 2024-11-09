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
  min-height: 500px;
  max-height: 1000px;
  padding: 20px;

  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
  min-height: 60px;
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 120px;
`;

  function GraphBox({currentDate, setCurrentDate, selectedDate, setSelectedDate, handleNextMonth, handlePrevMonth}) {
    const buttonArr = ['차트', '캘린더'];
    const [currentOption, setCurrentOption] = useState('차트');
  
    const { userData, setUserData } = useUser();
    const { companyList, setCompanyList, activeCompany, setActiveCompany } = useCompanyData();
    const { chartData } = useChartData();

    if (!activeCompany) {
      return <LoadingSpinner/>
    }
  
    if (!chartData || !chartData.chartList || chartData.chartList.length === 0) {
      return <LoadingSpinner/>
    }

    console.log(activeCompany)

    const realPrice = (chartData.chartList[0].open + 1) * chartData.chartList[0].changeRate
  
    return (
      <Container>
        <TitleBox>
          <img src={activeCompany.logo.url} height="50px" width="50px" style={{ borderRadius: '100%', marginRight: 8 }} />
          <div style={{ fontSize: 30, fontWeight: 600 }}>{activeCompany.name}</div>
        </TitleBox>
        <PriceBox>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ fontSize: 50, fontWeight: 600, marginRight: 20 }}>{activeCompany.name}</div>
            <div style={{
                fontSize: "40px",
                fontWeight: "bold",
                color: chartData.chartList[0].changeRate >= 0 ? "red" : "blue"
              }}>{realPrice >= 0 ? `+${Math.floor(realPrice).toLocaleString()}` : Math.floor(realPrice).toLocaleString()}</div>
            <div
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                color: chartData.chartList[0].changeRate >= 0 ? "red" : "blue",
                marginLeft: "10px"
              }}
            >
              ({chartData.chartList[0].changeRate >= 0 ? `+${chartData.chartList[0].changeRate.toFixed(2)}` : chartData.chartList[0].changeRate.toFixed(2)})%
            </div>
          </div>
          <div style={{ minWidth: "400px", display: 'flex', justifyContent: 'flex-end' }}>
            <OptionButton OptionList={buttonArr} currentState={currentOption} SetState={setCurrentOption} />
          </div>
        </PriceBox>
        {currentOption === '차트' ? <ApexChart /> : <ChartCalendar/>}
      </Container>
    );
  }

export default GraphBox;
