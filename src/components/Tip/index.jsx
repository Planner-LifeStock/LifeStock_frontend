import styled from 'styled-components'
import { light_bulb } from '../../assets'

const Container = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 600;
`

const Tip = ({
  ButtonTexts,
  option,
  TipArr,
  defaultTip,
  changeTip = false,
}) => {
  const tipText = changeTip
    ? option !== null
      ? TipArr[ButtonTexts[option]]
      : defaultTip
    : defaultTip
  return (
    <Container>
      <img
        src={light_bulb}
        style={{ width: '12px', height: '20px', marginRight: 10 }}/>
      {tipText}
    </Container>
  )
}

export default Tip
