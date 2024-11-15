import styled from 'styled-components'

const Container = styled.input`
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  background-color: #dfdfdf;
  border-radius: ${(props) => props.theme.border.radius.small};
  border: none;
  margin-bottom: 16px;
  font-size: ${({ fontSize }) => `${fontSize}px` || '20px'};
  padding-left: 10px;
`;

const InputBox = ({ 
  type = 'text',
  placeholder, 
  width = 480, 
  height = 50, 
  fontSize = 20, 
  value, 
  onChange 
}) => {
  return (
    <Container
      type={type}
      width={width}
      height={height}
      fontSize={fontSize}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputBox