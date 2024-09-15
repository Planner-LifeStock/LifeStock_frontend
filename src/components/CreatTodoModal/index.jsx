import { useRef, useState } from 'react'
import Button from '../Button'
import InputBox from '../InputBox'
import OptionButton from '../OptionButton'
import Tip from '../Tip'
import ImgAdd from '../ImageAdd'
import AssetBox from '../AssetBox'
import styled from 'styled-components'

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

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  width: 500px;
  height: 800px;
  padding: 15px;
  border-radius: 16px;
`

const InnerContainer = styled.div`
  padding: 10px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 5px;
`

function CreateTodoModal() {
  const [modalOpen, setModalOpen] = useState(false) //모달 useState
  const modalBackgorund = useRef()

  const [todoName, setTodoName] = useState(null)
  const [todoInfo, setTodoInfo] = useState(null)
  const [todoLevel, setTodoLevel] = useState(null)
  const [todoDay, setTodoDay] = useState([])
  const [deadLine, setDeadLine] = useState(null)

  return (
    <div>
      <div>
        <Button onClick={() => setModalOpen(true)}>할 일 추가하기</Button>
      </div>

      {/* 모달 창 밖의 부분 클릭 시 닫기 */}
      {modalOpen && (
        <ModalContainer
          ref={modalBackgorund}
          onClick={e => {
            if (e.target === modalBackgorund.current) {
              setModalOpen(false)
            }
          }}
        >
          <ModalContent>
            <div>
              <Title>이름</Title>
              <InputBox
                width={470}
                placeholder={'ex)아침 8시에 러닝 뛰기'}
                value={todoName}
                onChange={e => {
                  setCompanyName(e.target.value)
                }}
              />
            </div>

            <Button>할 일 추가하기</Button>
          </ModalContent>
        </ModalContainer>
      )}
    </div>
  )
}

export default CreateTodoModal
