import styled from 'styled-components'
import { useState, useRef } from 'react'
import { ModalContainer, ModalContent } from '../CreateCompanyModal/style'
import { light_bulb } from '../../assets'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const SellButton = styled.button`
  background-color: ${props => (props.disabled ? '#929292' : '#3182F6')};
  color: #ffffff;
  border-radius: 10px;
  border: none;
  transition: all 0.3s ease;
  margin-left: 100px;
  height: 12%;

  &:focus {
    border: none;
    outline: none;
  }

  &:hover {
    opacity: ${props => (props.disabled ? 1 : 0.5)};
  }
`

const SellCompany = ({ data }) => {
  const [PopupOpen, setPopupOpen] = useState(false)
  const PopupBackground = useRef()
  const chartData = data[0].chartData // companyFirstData의 첫번째 객체의 chartData이므로 수정해줄 필요 잇음

  return (
    <>
      <SellButton
        disabled={chartData.length < 7}
        onClick={() => setPopupOpen(true)}
      >
        스톡옵션 매각하기
      </SellButton>

      {PopupOpen && (
        <ModalContainer
          ref={PopupBackground}
          onClick={e => {
            if (e.target === PopupBackground.current) {
              setPopupOpen(false)
            }
          }}
        >
          <ModalContent style={{ maxWidth: '700px', maxHeight: '400px' }}>
            <div style={{ fontSize: '35px', marginTop: '20px' }}>
              회사 <span style={{ fontWeight: 'bold' }}>'아침운동'</span>을
              매각하시겠습니까?
            </div>
            <h3 style={{ marginTop: '80px' }}>
              <img
                src={light_bulb}
                style={{ width: '12px', height: '20px', marginRight: '10px' }}
              />
              매각 후에는 복구가 되지 않으니 신중하게 선택하세요!
            </h3>
            <h3 style={{ marginBottom: '100px' }}>
              매각 후에도 '운영기록'란에서 기록을 확인할 수 있어요.
            </h3>
            <Container>
              <SellButton
                style={{ height: '50px', width: '150px', marginLeft: '0px' }}
              >
                회사 매각
              </SellButton>
              <SellButton
                style={{
                  height: '50px',
                  width: '150px',
                  backgroundColor: '#929292',
                  marginLeft: '30px',
                }}
                onClick={() => setPopupOpen(false)}
              >
                취소
              </SellButton>
            </Container>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  )
}

export default SellCompany
