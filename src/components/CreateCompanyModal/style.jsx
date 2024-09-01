import styled from 'styled-components'

const ModalContent = styled.div`
  background-color: #ffffff;
  width: 500px;
  height: 900px;
  padding: 15px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: start;
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
`

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 5px;
`

export { ModalContent, ModalContainer, Title }
