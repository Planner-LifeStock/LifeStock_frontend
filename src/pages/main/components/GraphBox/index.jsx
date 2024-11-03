import styled from 'styled-components';
import { useState } from 'react';

import OptionButton from '../../../../components/OptionButton';
import UpDownText from '../../../../components/UpDownText';
import ApexChart from '../ApexChart';
import ChartCalendar from '../ChartCalendar';

import { useUser } from '../../../../hooks/useUser';
import { useCompanyData } from '../../../../hooks/useCompanyData';

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500px;
  max-height: 1000px;
  padding: 20px;

  display: flex;
  flex-direction: column;
`

const TitleBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
  min-height: 60px;
`

const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 120px;
`

function GraphBox() {
  const buttonArr = ['차트', '캘린더'];
  const [currentOption, setCurrentOption] = useState('차트');

  const { userData, setUserData } = useUser();
  const { companyList, setComapnyList, activeCompany, setActiveCompany} = useCompanyData();

  if(!activeCompany) {
    return (
      <div>로딩중...</div>
    )
  }

  return (
    <Container>
      <TitleBox>
        <img src={activeCompany.logo.url} height="50px" style={{ borderRadius: '100%', marginRight: 8 }} />
        <div style={{ fontSize: 30, fontWeight: 600 }}>{activeCompany.name}</div>
      </TitleBox>
      <PriceBox>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ fontSize: 50, fontWeight: 600, marginRight: 20 }}>{activeCompany.name}</div>
          <UpDownText
            // standard={activeCompany.chartData[activeCompany.chartData.length - 1][2]}
            // comparision={activeCompany.chartData[activeCompany.chartData.length - 1][3]}
            fontSize={30}
          />
        </div>
        <div style={{ minWidth: "400px", display: 'flex', justifyContent: 'flex-end' }}>
          <OptionButton OptionList={buttonArr} currentState={currentOption} SetState={setCurrentOption} />
        </div>
      </PriceBox>
      {currentOption === '차트' ? <ApexChart /> : <ChartCalendar />}
    </Container>
  );
}

export default GraphBox;
