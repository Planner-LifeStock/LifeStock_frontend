import styled from 'styled-components'

const Container = styled.input`
  line-height: 50px;
  width: ${({ width }) => `${width}px`};
  background-color: #dfdfdf;
  border-radius: 10px;
  border: none;
  margin-bottom: 16px;
  font-size: 20px;
  padding-left: 10px;
`

const InputBox = ({ placeholder, width = 480 }) => {
  return <Container width={width} placeholder={placeholder} />
}

export default InputBox
