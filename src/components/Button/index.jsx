import styled from 'styled-components'

const ButtonContainer = styled.button`
  background-color: ${(props) => props.theme.colors.blue.primary};
  color: #fff;
  border-radius: ${(props) => props.theme.border.radius.small};

  font-size: 20px;
  font-weight: ${(props) => props.theme.font.weight.bold};

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height)};

  transition: all 0.3s ease;
  
  &:focus {
    border: none;
    outline: none;
  }
  
  &:hover {
    opacity: 0.5;
  }
`

function Button({
  children,
  width = 320,
  height = 40,
  onClick,
}) {
  return (
    <ButtonContainer
      width={width}
      height={height}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
