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

  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  /* &:hover {
    background-color: ${({ hoverBackground }) => hoverBackground};
  } */
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
