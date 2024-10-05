import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components';

const ChartWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const options = {
  chart: {
    type: 'candlestick',
    zoom: { enabled: false },
  },
  title: {
    text: 'Candlestick Chart Example',
    align: 'center',
  },
  xaxis: {
    type: 'datetime', // X축을 시간 축으로 설정
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
  height: '100%',
};

const CandlestickChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        data: [
          { x: new Date('2024-03-11'), y: [6630.33, 6640.33, 6628.33, 6635.33] },
          { x: new Date('2024-03-12'), y: [6636.11, 6650.11, 6632.11, 6642.11] },
          { x: new Date('2024-03-13'), y: [6645.65, 6650.65, 6630.65, 6640.65] }, // 종가 하락
          { x: new Date('2024-03-14'), y: [6642.24, 6645.24, 6635.24, 6640.24] },
          { x: new Date('2024-03-15'), y: [6648.33, 6650.33, 6640.33, 6643.33] },
          { x: new Date('2024-03-16'), y: [6642.11, 6648.11, 6640.11, 6644.11] },
          { x: new Date('2024-03-17'), y: [6646.65, 6650.65, 6642.65, 6645.65] },
          { x: new Date('2024-03-18'), y: [6644.24, 6646.24, 6640.24, 6643.24] },
          { x: new Date('2024-03-19'), y: [6649.15, 6650.15, 6642.15, 6647.15] }, // 종가 하락
          { x: new Date('2024-03-20'), y: [6650.5, 6655.5, 6648.5, 6653.5] },
          { x: new Date('2024-03-21'), y: [6651.7, 6655.7, 6650.7, 6654.7] },
          { x: new Date('2024-03-22'), y: [6653.22, 6655.22, 6648.22, 6651.22] },
          { x: new Date('2024-03-23'), y: [6647.33, 6649.33, 6642.33, 6646.33] }, // 종가 하락
          { x: new Date('2024-03-24'), y: [6649.44, 6650.44, 6645.44, 6648.44] },
          { x: new Date('2024-03-25'), y: [6651.55, 6655.55, 6650.55, 6653.55] },
          { x: new Date('2024-03-26'), y: [6645.66, 6648.66, 6642.66, 6644.66] }, // 종가 하락
        ],
      },
    ],
  });

  return (
    <ChartWrapper>
      <Chart options={options} series={chartData.series} type="candlestick" height="100%" width={1000} />
    </ChartWrapper>
  );
};

export default CandlestickChart;
