import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components';

import { useChartData } from '../../../../hooks/useChart';

const ChartWrapper = styled.div`
  max-height: 730px;
  width: 100%;
`;

const options = {
  chart: {
    type: 'candlestick',
    zoom: { enabled: true },
  },
  xaxis: {
    show: false,
    type: 'datetime', // X축을 시간 축으로 설정
    labels: {
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
  //[todo] tooltip에 날짜 창 띄우기
  tooltip: {
    enabled: true, // 툴팁을 활성화할지 여부를 설정 (true면 툴팁이 보임)
    // enabledOnSeries: undefined, // 특정 시리즈에만 툴팁을 활성화할지 설정 (undefined이면 기본값 적용)
    // shared: true, // 여러 시리즈에 대해 동시에 툴팁을 표시할지 여부. true면 마우스가 위치한 x축의 모든 시리즈 데이터가 표시됨
    followCursor: true, // 마우스 커서를 따라 툴팁이 이동할지 설정
    // intersect: true, // 마우스가 데이터 포인트와 교차할 때만 툴팁이 표시되도록 설정 (false면 교차하지 않아도 근처에서 툴팁이 보임)
    // inverseOrder: false, // 시리즈의 툴팁 순서를 역순으로 표시할지 여부
    // custom: undefined, // 커스텀 툴팁을 정의할 수 있는 함수. 기본값은 undefined로 설정
    hideEmptySeries: true, // 값이 없는 시리즈에 대해 툴팁을 숨길지 설정
    // fillSeriesColor: false, // 시리즈의 색상을 툴팁의 배경색으로 채울지 여부
    // theme: false, // 테마 설정. 기본적으로 테마가 비활성화 (false)
    x: {
      formatter: function (value) {
        // 여기서도 동일한 포맷을 적용
        const date = new Date(value);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${month}/${day}`; // MM/DD 형식으로 날짜 표시
      },
    },
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      const o = w.globals.seriesCandleO[seriesIndex][dataPointIndex]; // 시가
      const h = w.globals.seriesCandleH[seriesIndex][dataPointIndex]; // 고가
      const l = w.globals.seriesCandleL[seriesIndex][dataPointIndex]; // 저가
      const c = w.globals.seriesCandleC[seriesIndex][dataPointIndex]; // 종가

      return `
        <div style="padding: 10px;">
          <div><strong>시작가:</strong> ${o}</div>
          <div><strong>최고가:</strong> ${h}</div>
          <div><strong>최저가:</strong> ${l}</div>
          <div><strong>종료가:</strong> ${c}</div>
        </div>
      `;
    },
    // y: {
    //   formatter: undefined, // Y축 값에 대한 커스터마이즈된 형식 지정 함수 (기본값은 undefined)
    //   title: {
    //     formatter: seriesName => seriesName, // Y축 툴팁에서 시리즈 이름을 표시할 형식 지정
    //   },
    // },

    // marker: {
    //   show: true, // 툴팁에서 마커(데이터 포인트의 표시 점)를 보여줄지 여부
    // },
  },
};

const ApexChart = () => {
  const { chartData } = useChartData();

  // chartData를 상태에 저장
  const [storedChartData, setStoredChartData] = useState(null);

  useEffect(() => {
    if (chartData) {
      setStoredChartData(chartData); // chartData가 업데이트될 때 상태로 저장
    }
  }, [chartData]); // chartData가 변경될 때마다 저장

  const chartArr = [{ data: [] }];

  storedChartData &&
    storedChartData.chartList.map(chart => {
      const date = new Date(chart.date).getTime(); // 타임스탬프 형식으로 변환
      chartArr[0].data.push({
        x: date,
        y: [chart.open, chart.high, chart.low, chart.close],
      });
    });

  // console.log(storedChartData);
  // console.log(chartArr);

  return (
    <ChartWrapper>
      <Chart style={{marginTop: "20px"}}
       options={options}
       series={chartArr}
       type="candlestick"
       height={700}
       width={1000} />
    </ChartWrapper>
  );
};

export default ApexChart;
