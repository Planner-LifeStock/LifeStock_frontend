import styled from 'styled-components'
import { light_bulb } from '../../assets'

const Container = styled.div`
  display: flex;
  
  font-size: ${(props) => props.theme.font.size.primary};
  font-weight: ${(props) => props.theme.font.weight.bold};
`

const Tip = ({
  ButtonTexts, // < 이거 왜 필요함?
  option,
  TipArr,
  defaultTip,
  changeTip = false,
}) => {
  const tipText = changeTip
    ? option !== null
      ? TipArr[option]
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
