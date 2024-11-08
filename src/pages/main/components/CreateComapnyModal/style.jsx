import styled from 'styled-components'

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #ffffff;
  width: 1500px;
  height: 500px;
  padding: 15px;
  
  border-radius: ${(props) => props.theme.border.radius.small};
`

const InnerContainer = styled.div`
  padding: 10px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1001;
`

const Title = styled.div`
  font-size: ${(props) => props.theme.font.size.xLarge};
  font-weight: ${(props) => props.theme.font.weight.bold};
  margin-bottom: 5px;
`

export { ModalContent, ModalContainer, Title, InnerContainer }
