import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components';
import { useChartData } from '../../hooks/useChart';
import Button from '../Button';
import { API } from '../../api/axios';

const ChartWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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

  console.log(storedChartData);
  console.log(chartArr);

  return (
    <ChartWrapper>
      <Chart options={options} series={chartArr} type="candlestick" height="100%" width={1000} />
      {/* <Button
        onClick={async () => {
          try {
            // 새로운 데이터를 정의합니다.
            const date = new Date('2024-10-01'); // 원하는 날짜와 시간을 지정
            // const formattedDate = date.toISOString().split('.')[0]; // T포함 형식으로 변환 (초까지)
            // console.log(formattedDate);
            const newChart = {
              companyId: 1, // 예시로 1번 회사로 설정
              userId: 1, // 실제 userId로 설정하세요
              todoId: null, // todoId는 null로 설정 가능
              open: 5100,
              high: 5200,
              low: 5050,
              close: 5150,
              date: date,
              // date: new Date().toISOString().split('.')[0], // YYYY-MM-DDTHH:MM:SS 형식
            };

            console.log('전송할 데이터:', newChart);

            // POST 요청을 보냅니다.
            const result = await API.post('/company/1/charts', newChart);
            console.log('데이터 전송 성공:', result.data);
          } catch (error) {
            console.log('할 일 추가 중 오류 발생 :', error);
            alert('post 중 문제가 발생하였습니다.');
          }
        }}
      >
        post
      </Button> */}
    </ChartWrapper>
  );
};

export default ApexChart;
