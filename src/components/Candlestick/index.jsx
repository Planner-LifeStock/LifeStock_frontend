import styled from 'styled-components'
import { Chart } from 'react-google-charts'

const ChartContainer = styled.div`
  display: flex;
  align-items: start;
  /* height: 810px; */
  overflow-y: hidden;
`

export const options = {
  // tooltip: { isHtml: true },
  height: 800,
  legend: 'none',
  bar: { groupWidth: '100%' }, // Remove space between bars.
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: '#2600ff' }, // red
    risingColor: { strokeWidth: 0, fill: '#ff0000' }, // green
  },
}

function CandleStick({ chartData }) {
  if (!chartData || chartData.length === 0) {
    return <div>데이터가 없습니다.</div>
  }
  return (
    <ChartContainer>
      <Chart
        chartType="CandlestickChart"
        width="100%"
        height="400px"
        data={chartData}
        options={options}
      />
    </ChartContainer>
  )
}

export default CandleStick
