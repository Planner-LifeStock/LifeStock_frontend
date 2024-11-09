import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components';

import { useChartData } from '../../../../hooks/useChart';
import { useCompanyData } from '../../../../hooks/useCompanyData';

const ChartWrapper = styled.div`
  max-height: 730px;
  width: 100%;
`;

const ApexChart = () => {
  const { chartArr } = useChartData();
  // const [chartArr, setChartArr] = useState([{ data: [] }]); // chartArr를 상태로 관리

  // useEffect(() => {
  //   if (chartData) {
  //     const newChartArr = [{ data: [] }];
  //     chartData.chartList.forEach(chart => {
  //       const date = new Date(chart.date).getTime();
  //       newChartArr[0].data.push({
  //         x: date,
  //         y: [chart.open, chart.high, chart.low, chart.close],
  //       });
  //     });
  //     setChartArr(newChartArr); // chartData가 변경될 때마다 chartArr 업데이트
  //     console.log(newChartArr);
  //   }
  // }, [chartData]); // chartData가 변경될 때 실행

  const options = {
    chart: {
      type: 'candlestick',
      animations: {
        enabled: false,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 500,
      },
      zoom: { enabled: true },
    },
    xaxis: {
      show: true,
      type: 'datetime', // X축을 시간 축으로 설정
      labels: {
        show: false,
        formatter: function (value) {
          const date = new Date(value);
          const month = date.getMonth() + 1;
          const day = date.getDate();
          return `${month}/${day}`;
        },
      },
      crosshairs: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      tooltip: {
        enabled: true,
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#ff4545',
          downward: '#1900ff',
        },
      },
    },
    //x축에 뜨는 날짜 모달
    tooltip: {
      enabled: true,
      followCursor: true,
      x: {
        formatter: function (value) {
          const date = new Date(value);
          const month = date.getMonth() + 1;
          const day = date.getDate();
          return `${month}/${day}`;
        },
      },
      //차트 클릭시 뜨는 세부항목 모달창
      custom: function ({ seriesIndex, dataPointIndex, w }) {
        const o = w.globals.seriesCandleO[seriesIndex][dataPointIndex]; // 시가
        const h = w.globals.seriesCandleH[seriesIndex][dataPointIndex]; // 고가
        const l = w.globals.seriesCandleL[seriesIndex][dataPointIndex]; // 저가
        const c = w.globals.seriesCandleC[seriesIndex][dataPointIndex]; // 종가
        const dateValue = new Date(w.globals.seriesX[seriesIndex][dataPointIndex]);
        const formattedDate = `${dateValue.getFullYear()}/${dateValue.getMonth() + 1}/${dateValue.getDate()}`;
        return `
          <div style="padding: 10px;">
            <div style="font-size:20px;">${formattedDate}</div>
            ${
              c - o > 0
                ? `<div style="color: red; font-size:20px;">+${c - o}원 (+${((c / o - 1) * 100).toFixed(1)}%)</div>`
                : c - o < 0
                  ? `<div style="color: blue; font-size:20px;">${c - o}원 (${((c / o - 1) * 100).toFixed(1)}%)</div>`
                  : `<div style="color: gray; font-size:20px;">${c - o}원 (${((c / o - 1) * 100).toFixed(1)}%)</div>`
            }
            <div>시가: ${o}원</div>
            <div>고가: ${h}원</div>
            <div>저가: ${l}원</div>
            <div>종가: ${c}원</div>
          </div>
        `;
      },
    },
  };

  return (
    <ChartWrapper>
      <Chart options={options} series={chartArr} type="candlestick" />
    </ChartWrapper>
  );
};

export default ApexChart;
