import styled from "styled-components";
import { Chart } from "react-google-charts"


const ChartContainer=styled.div`
    display: flex;
    align-items: start;
    height:810px;
`
//최저값, 시작값, 종료값, 최고값
// const data = [
//     ["Date", "Low", "Open", "Close", "High"],
//     ["8/10", 73000, 75000, 78000, 81000],
//     ["8/11", 81000, 83000, 85000, 95000],
//     ["8/12", 82000, 84000, 81000, 97000],
//     ["8/13", 79000, 81000, 80000, 86000],  
//     ["8/14", 81000, 83000, 84000, 89000],  
//     ["8/15", 82000, 84000, 83000, 88000],  
//     ["8/16", 80000, 82000, 85000, 87000],  
//     ["8/17", 81000, 82000, 81000, 86000],  
//     ["8/18", 78000, 79000, 81000, 85000],  
//     ["8/19", 82000, 84000, 83000, 87000],  
//     ["8/20", 81000, 82000, 80000, 86000],  
//     ["8/21", 80000, 81000, 82000, 87000],  
//     ["8/22", 79000, 80000, 81000, 85000],
//     // ["8/23", 99000, 90000, 181000, 85000],
//     // ["8/24", 180000, 180000, 281000, 291000],
//   ];

export const options = {
    // tooltip: { isHtml: true },
    height:800,
    legend: "none",
    bar: { groupWidth: "100%" }, // Remove space between bars.
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#2600ff" }, // red
      risingColor: { strokeWidth: 0, fill: "#ff0000" }, // green
    },
  };



function CandleStick(
  {
    chartData
  }
){
  if (!chartData || chartData.length === 0) {
    return <div>데이터가 없습니다.</div>;
}
    return(
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

export default CandleStick;