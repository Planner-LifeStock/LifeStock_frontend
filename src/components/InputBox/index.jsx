import styled from 'styled-components'

const Container = styled.input`
  height: ${({ height }) => `${height}px`};  // height 속성 추가(line-height 지워버림)
  width: ${({ width }) => `${width}px`};
  background-color: #dfdfdf;
  border-radius: 10px;
  border: none;
  margin-bottom: 16px;
  font-size: ${({ fontSize }) => `${fontSize}px` || '20px'};  // 기본값 20px
  padding-left: 10px;
`

const InputBox = ({ placeholder, width = 480, height= 50, fontSize = 20, value, onChange }) => {
  return (
    <Container
      width={width}
      height={height}
      fontSize={fontSize}  // fontSize를 props로 전달
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default InputBox
