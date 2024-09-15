import styled from 'styled-components'
import UpDownText from '../../components/UpDownText'
import CandleStick from '../../components/Candlestick'

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
  justify-content: start;
  align-items: center;
  min-height: 120px;
`

function GraphBox({ data }) {
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
        <div style={{ fontSize: 50, fontWeight: 600, marginRight: 20 }}>
          {console.log(data.chartData)}
          {data.chartData[data.chartData.length - 1][2]}
        </div>
        {/* [todo]data.chartData[data.chartData.length - 1][3]=> 이런거 좀 간략하게 만들 수 없나? */}
        <UpDownText
          standard={data.chartData[data.chartData.length - 1][2]}
          comparision={data.chartData[data.chartData.length - 1][3]}
          fontSize={30}
        />
        {/* <UpDownText fontSize={30}>
          {(data.currentPrice - data.buyPrice).toLocaleString()} (
          {((data.currentPrice / data.buyPrice - 1) * 100).toFixed(1)}%)
        </UpDownText> */}
      </PriceBox>
      <CandleStick chartData={data.chartData} />
    </Container>
  )
}

export default GraphBox
