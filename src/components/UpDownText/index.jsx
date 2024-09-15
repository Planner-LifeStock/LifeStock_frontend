import styled from 'styled-components'
import Subtraction from '../../function/calculation/subtraction'
import PercentageIncrease from '../../function/calculation/percentageIncrease/index.jsx'

const UpdownContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${({ fontSize }) => `${fontSize || 16}px`};
  font-weight: 600;
  color: ${props => props.$isPositive};
`

// [todo] Text의 값이 양수이냐 음수이냐에 따라서 FallText, RiseText로 바꿔야함. 조건문 적용
function UpDownText({ standard, comparision, fontSize }) {
  //비교 값과의 차가 양수냐 음수냐에 따라서 글자색 조정
  const isPositive =
    comparision === standard ? 'gray' : comparision > standard ? 'red' : 'blue'
  const sub = Subtraction(comparision, standard)
  const percent = PercentageIncrease(standard, comparision)

  return (
    <UpdownContainer fontSize={fontSize} $isPositive={isPositive}>
      {/* positive면 +문자열 붙임 */}
      <div style={{ marginRight: 10 }}>
        {sub > 0 ? `+${sub.toLocaleString()}` : sub.toLocaleString()}
      </div>
      {percent}
    </UpdownContainer>
  )
}

export default UpDownText
