import styled from 'styled-components';
import UpDownText from '../../components/UpDownText';
import CandleStick from '../../components/Candlestick';
import OptionButton from '../../components/OptionButton';
import { useState } from 'react';
import ChartCalendar from '../../components/Calendar';
import ApexChart from '../../components/ApexChart';

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500px;
  padding: 20px;
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

function GraphBox({ activeCompany }) {
  const buttonArr = ['차트', '캘린더'];
  const [currentOption, setCurrentOption] = useState('차트');

  return (
    <Container>
      {activeCompany ? (
        <div>
          <TitleBox>
            <img src={activeCompany.logo.url} height="50px" style={{ borderRadius: '100%', marginRight: 8 }} />
            <div style={{ fontSize: 30, fontWeight: 600 }}>{activeCompany.name}</div>
          </TitleBox>
          <PriceBox>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ fontSize: 50, fontWeight: 600, marginRight: 20 }}>{activeCompany}</div>
              <UpDownText
                // standard={activeCompany.chartData[activeCompany.chartData.length - 1][2]}
                // comparision={activeCompany.chartData[activeCompany.chartData.length - 1][3]}
                fontSize={30}
              />
            </div>
            <div style={{ width: 300 }}>
              <OptionButton OptionList={buttonArr} currentState={currentOption} SetState={setCurrentOption} />
              {console.log(currentOption)}
            </div>
          </PriceBox>
        </div>
      ) : (
        <div>로딩중</div>
      )}
      {currentOption === '차트' ? <ApexChart /> : <ChartCalendar />}
    </Container>
  );
}

export default GraphBox;
