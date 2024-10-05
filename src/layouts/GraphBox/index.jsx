import styled from 'styled-components'
import UpDownText from '../../components/UpDownText'
import CandleStick from '../../components/Candlestick'
import OptionButton from '../../components/OptionButton'
import { useState } from 'react'
import ChartCalendar from '../../components/Calendar'
import { useUser } from '../../hooks/useUser'
import { useCompanyData } from '../../hooks/useCompanyData'

const Container = styled.div`
  padding: 20px;
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

function GraphBox({ data }) {
  const buttonArr = ['차트', '캘린더']
  const [currentOption, setCurrentOption] = useState('차트')
  const { userData, setUserData } = useUser();
  const { companyList, setCompanyList, activeCompany, setActiveCompany} = useCompanyData();

  // if(!userData || !activeCompany || !companyList)
  //   return <div>로딩 중...</div>
  
  return (
    <Container>
      <TitleBox>
        <img
          src={data.logo}
          height="50px"
          style={{ borderRadius: '100%', marginRight: 8 }}
        />
        <div style={{ fontSize: 30, fontWeight: 600 }}>{data.name}</div>
      </TitleBox>
      <PriceBox>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ fontSize: 50, fontWeight: 600, marginRight: 20 }}>
            {data.chartData[data.chartData.length - 1][2]}
          </div>
          <UpDownText
            standard={data.chartData[data.chartData.length - 1][2]}
            comparision={data.chartData[data.chartData.length - 1][3]}
            fontSize={30}
          />
        </div>
        <div style={{ width: 300 }}>
          <OptionButton
            OptionList={buttonArr}
            currentState={currentOption}
            SetState={setCurrentOption}
          />
          {console.log(currentOption)}
        </div>
      </PriceBox>
      {currentOption === '차트' ? (
        <CandleStick chartData={data.chartData} />
      ) : (
        <ChartCalendar />
      )}
    </Container>
  )
}

export default GraphBox
