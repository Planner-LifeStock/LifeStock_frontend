// xaxis: {
//     type: 'category', // 축의 유형 (category, datetime, numeric 등). 여기서는 'category'로 설정됨.
//     categories: [], // x축에 표시할 카테고리 값의 배열. 'category' 타입일 때 사용됨.
//     tickAmount: undefined, // 축에 표시될 눈금의 수. 지정하지 않으면 자동으로 계산됨.
//     tickPlacement: 'between', // 눈금을 축의 'between' (카테고리 간) 또는 'on' (카테고리 위)에 표시할지 여부.
//     min: undefined, // x축의 최소값을 수동으로 설정.
//     max: undefined, // x축의 최대값을 수동으로 설정.
//     stepSize: undefined, // 눈금 사이의 간격을 수동으로 설정.
//     range: undefined, // x축에서 표시할 범위를 설정. min/max와 함께 사용하지 않음.
//     floating: false, // 축이 차트 영역에서 "떠 있을지" 여부. true이면 x축이 고정되지 않고 차트의 중간에 위치함.
//     decimalsInFloat: undefined, // x축 값이 소수점일 때 표시할 소수점 자리수.
//     overwriteCategories: undefined, // 기존 카테고리 배열을 덮어쓸 배열. 새 카테고리로 덮어씀.
//     position: 'bottom', // x축의 위치. 'bottom' 또는 'top'으로 설정 가능.

//     labels: {
//       show: true, // x축의 라벨(카테고리 값)을 표시할지 여부.
//       rotate: -45, // 라벨을 몇 도 회전시킬지 설정. 여기서는 -45도로 회전.
//       rotateAlways: false, // 라벨을 항상 회전할지 여부. false이면 공간이 부족할 때만 회전.
//       hideOverlappingLabels: true, // 라벨이 겹치지 않도록 숨길지 여부.
//       showDuplicates: false, // 중복된 라벨을 숨길지 여부.
//       trim: false, // 길이가 긴 라벨을 잘라내지 여부.
//       minHeight: undefined, // 라벨의 최소 높이.
//       maxHeight: 120, // 라벨의 최대 높이. 여기서는 120px로 설정.
//       style: {
//         colors: [], // 라벨의 색상 배열.
//         fontSize: '12px', // 라벨 텍스트의 폰트 크기.
//         fontFamily: 'Helvetica, Arial, sans-serif', // 라벨의 폰트 패밀리.
//         fontWeight: 400, // 라벨 텍스트의 폰트 굵기.
//         cssClass: 'apexcharts-xaxis-label', // 라벨에 적용할 CSS 클래스.
//       },
//       offsetX: 0, // 라벨의 x축 오프셋. 라벨을 수평으로 이동시킬 수 있음.
//       offsetY: 0, // 라벨의 y축 오프셋. 라벨을 수직으로 이동시킬 수 있음.
//       format: undefined, // datetime 타입일 때 표시할 포맷. 여기서는 undefined.
//       formatter: undefined, // 라벨의 값을 커스터마이징할 수 있는 함수.
//       datetimeUTC: true, // datetime 값을 UTC 형식으로 표시할지 여부.
//       datetimeFormatter: {
//         year: 'yyyy', // 연도를 표시할 때의 형식. 예: 2024.
//         month: "MMM 'yy", // 월을 표시할 때의 형식. 예: Mar '24.
//         day: 'dd MMM', // 일을 표시할 때의 형식. 예: 13 Mar.
//         hour: 'HH:mm', // 시간을 표시할 때의 형식. 예: 15:30.
//         minute: 'HH:mm:ss', // 분과 초를 표시할 때의 형식.
//         second: 'HH:mm:ss', // 초를 표시할 때의 형식.
//       },
//     },

//     group: {
//       groups: [], // 여러 카테고리를 그룹으로 묶을 때 사용.
//       style: {
//         colors: [], // 그룹 라벨의 색상 배열.
//         fontSize: '12px', // 그룹 라벨의 폰트 크기.
//         fontWeight: 400, // 그룹 라벨의 폰트 굵기.
//         fontFamily: undefined, // 그룹 라벨의 폰트 패밀리.
//         cssClass: '' // 그룹 라벨에 적용할 CSS 클래스.
//       }
//     },

//     axisBorder: {
//       show: true, // x축의 경계를 표시할지 여부.
//       color: '#78909C', // x축 경계의 색상.
//       height: 1, // x축 경계의 높이.
//       width: '100%', // x축 경계의 너비.
//       offsetX: 0, // x축 경계를 수평으로 이동시킬 오프셋 값.
//       offsetY: 0, // x축 경계를 수직으로 이동시킬 오프셋 값.
//     },

//     axisTicks: {
//       show: true, // x축 눈금선을 표시할지 여부.
//       borderType: 'solid', // 눈금선의 스타일 ('solid', 'dashed', 'dotted').
//       color: '#78909C', // 눈금선의 색상.
//       height: 6, // 눈금선의 높이.
//       offsetX: 0, // 눈금선을 수평으로 이동시킬 오프셋 값.
//       offsetY: 0, // 눈금선을 수직으로 이동시킬 오프셋 값.
//     },

//     title: {
//       text: undefined, // x축의 제목 텍스트. undefined이면 제목 없음.
//       offsetX: 0, // 제목의 x축 오프셋.
//       offsetY: 0, // 제목의 y축 오프셋.
//       style: {
//         color: undefined, // 제목 텍스트의 색상.
//         fontSize: '12px', // 제목 텍스트의 폰트 크기.
//         fontFamily: 'Helvetica, Arial, sans-serif', // 제목의 폰트 패밀리.
//         fontWeight: 600, // 제목 텍스트의 폰트 굵기.
//         cssClass: 'apexcharts-xaxis-title', // 제목에 적용할 CSS 클래스.
//       },
//     },

//     crosshairs: {
//       show: true, // 마우스 오버 시 나타나는 크로스헤어를 표시할지 여부.
//       width: 1, // 크로스헤어의 두께.
//       position: 'back', // 크로스헤어의 위치 ('front', 'back').
//       opacity: 0.9, // 크로스헤어의 투명도.
//       stroke: {
//         color: '#b6b6b6', // 크로스헤어 선의 색상.
//         width: 0, // 크로스헤어 선의 두께.
//         dashArray: 0, // 크로스헤어 선의 대시 배열 (0이면 실선).
//       },
//       fill: {
//         type: 'solid', // 크로스헤어의 채우기 유형 ('solid', 'gradient').
//         color: '#B1B9C4', // 크로스헤어 채우기의 색상.
//         gradient: {
//           colorFrom: '#D8E3F0', // 그라데이션 시작 색상.
//           colorTo: '#BED1E6', // 그라데이션 끝 색상.
//           stops: [0, 100], // 그라데이션의 범위 (0에서 100까지).
//           opacityFrom: 0.4, // 그라데이션 시작 투명도.
//           opacityTo: 0.5, // 그라데이션 끝 투명도.
//         },
//       },
//       dropShadow: {
//         enabled: false, // 크로스헤어의 그림자 효과 활성화 여부.
//         top: 0, // 그림자의 상단 위치.
//         left: 0, // 그림자의 왼쪽 위치.
//         blur: 1, // 그림자의 블러 효과.
//         opacity: 0.4, // 그림자의 투명도.
//       },
//     },

//     tooltip: {
//       enabled: true, // 툴팁을 활성화할지 여부.
//       formatter: undefined, // 툴팁에 표시할 값을 커스터마이징할 함수.
//       offsetY: 0, // 툴팁의 y축 오프셋.
//       style: {
//         fontSize: 0, // 툴팁의 텍스트 크기.
//         fontFamily: 0, // 툴팁의 폰트 패밀리.
//       },
//     },
//   }
