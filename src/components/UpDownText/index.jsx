// import styled from 'styled-components';
// import Subtraction from '../../function/calculation/subtraction';
// import PercentageIncrease from '../../function/calculation/percentageIncrease';

// const UpdownContainer = styled.div`
//   display: flex;
//   justify-content: flex-start; /* 오른쪽 정렬 */
//   font-size: ${({ fontSize }) => `${fontSize || 16}px`};
//   font-weight: bold;
//   color: ${props => props.$isPositive};
//   min-width: 50px; /* 일정한 너비 확보 */
// `;

// const PriceContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   font-size: ${({ fontSize }) => `${fontSize || 16}px`};
//   font-weight: bold;
//   color: black;
// `;

// // [todo] Text의 값이 양수이냐 음수이냐에 따라서 FallText, RiseText로 바꿔야함. 조건문 적용
// function UpDownText({ standard, comparision, fontSize }) {
//   // 비교 값과의 차가 양수냐 음수냐에 따라서 글자색 조정
//   const isPositive = comparision === standard ? 'gray' : comparision > standard ? 'red' : 'blue';
//   const sub = Subtraction(comparision, standard);
//   const percent = PercentageIncrease(standard, comparision);

//   return (
//     <UpdownContainer fontSize={fontSize} $isPositive={isPositive}>
//       {percent}
//     </UpdownContainer>
//   );
// }

// export default UpDownText;

import styled from 'styled-components';
import Subtraction from '../../function/calculation/subtraction';
import PercentageIncrease from '../../function/calculation/percentageIncrease';

const UpdownContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: ${({ fontSize }) => `${fontSize || 16}px`};
  font-weight: bold;
  color: ${props => props.$isPositive};
  min-width: 50px;
`;

// UpDownText 컴포넌트 수정
function UpDownText({ standard, comparision, fontSize }) {
  const isPositive = comparision === standard ? 'gray' : comparision > standard ? 'red' : 'blue';
  const percentValue = PercentageIncrease(standard, comparision);

  // 수익률에 양수일 때는 +, 음수일 때는 - 기호 추가, 괄호 위치 조정
  const percent = isPositive === 'gray' 
    ? `(${percentValue})` 
    : `${isPositive === 'red' ? `(+${percentValue})` : `(${percentValue})`}`;

  return (
    <UpdownContainer fontSize={fontSize} $isPositive={isPositive}>
      {percent}
    </UpdownContainer>
  );
}

export default UpDownText;