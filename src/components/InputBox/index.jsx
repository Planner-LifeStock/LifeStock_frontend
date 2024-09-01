import styled from 'styled-components'

const Container = styled.input`
  height: 50px;
  width: 480px;
  background-color: #dfdfdf;
  border-radius: 10px;
  border: none;
  margin-bottom: 16px;
  font-size: 20px;
  padding-left: 10px;
`

const InputBox = ({ placeholder }) => {
  return <Container placeholder={placeholder} />
}

export default InputBox
