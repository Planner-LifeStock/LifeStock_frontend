import { useRef, useState } from 'react'
import Button from '../Button'
import InputBox from '../InputBox'
import OptionButton from '../OptionButton'
import Tip from '../Tip'
import ImgAdd from '../ImageAdd'
import AssetBox from '../AssetBox'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

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
  width: 520px;
  height: 750px;
  padding: 15px;
  border-radius: 16px;
`

const InnerContainer = styled.div`
  padding: 10px;
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  margin-bottom: 30px;
`

const Title = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 5px;
`
const TitleBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: end;
  min-height: 60px;
  margin-bottom: 20px;
`
const StyledDatePicker = styled(DatePicker)`
  width: 480px;
  height: 40px;
  font-size: 16px;
  padding: 8px;
  border-radius: 16px;
  background-color: #dfdfdf;
  font-size: 20px;
  border: 0px;
`

function CreateTodoModal({ data }) {
  const [modalOpen, setModalOpen] = useState(false) //모달 useState
  const modalBackgorund = useRef()

  const [todoName, setTodoName] = useState(null)
  const [todoInfo, setTodoInfo] = useState(null)
  const [todoLevel, setTodoLevel] = useState(null)
  const [todoDay, setTodoDay] = useState([])
  const [deadLine, setDeadLine] = useState(null)

  const defaultLevelTip =
    '난이도에 따라 플랜을 수행했을 때의 주가의 등락율이 결정돼요!'
  const levelArr = ['최상', '상', '보통', '하', '최하']
  const dayArr = ['월', '화', '수', '목', '금', '토', '일']

  return (
    <div>
      <div>
        <Button onClick={() => setModalOpen(true)}>할 일 추가하기</Button>
      </div>

      {modalOpen && (
        <ModalContainer
          ref={modalBackgorund}
          onClick={e => {
            if (e.target === modalBackgorund.current) {
              setModalOpen(false)
              setModalOpen(false)
              setDeadLine(null)
              setTodoDay([])
              setTodoInfo('')
              setTodoName('')
              setTodoLevel(null)
            }
          }}
        >
          <ModalContent>
            <InnerContainer>
              <TitleBox>
                <img
                  src={data.logo}
                  height="50px"
                  style={{ borderRadius: '100%', marginRight: 8 }}
                />
                <div style={{ fontSize: 30, fontWeight: 600 }}>{data.name}</div>
              </TitleBox>
              <div>
                <Title>이름</Title>
                <InputBox
                  width={480}
                  placeholder={'ex)아침 8시에 러닝 뛰기'}
                  value={todoName}
                  onChange={e => {
                    setTodoName(e.target.value)
                  }}
                />
              </div>
              <div>
                <Title>설명</Title>
                <InputBox
                  width={480}
                  placeholder={'(생략가능)'}
                  value={todoInfo}
                  onChange={e => {
                    setTodoInfo(e.target.value)
                  }}
                />
              </div>
              <div style={{ width: '100%' }}>
                <Title>난이도</Title>
                <OptionButton
                  OptionList={levelArr}
                  currentState={todoLevel}
                  SetState={setTodoLevel}
                />
                <Tip defaultTip={defaultLevelTip} changeTip={false}></Tip>
              </div>
              <div style={{ width: '100%' }}>
                <Title>요일</Title>
                <OptionButton
                  OptionList={dayArr}
                  currentState={todoDay}
                  SetState={setTodoDay}
                  multiple={true}
                />
              </div>
              <div>
                <Title>마감날짜</Title>
                <StyledDatePicker
                  selected={deadLine}
                  onChange={date => setDeadLine(date)}
                  dateFormat="yyyy.MM.dd"
                  placeholderText="마감 날짜를 선택하세요(선택)"
                />
              </div>
            </InnerContainer>

            <Button
              width={'100%'}
              onClick={e => {
                const newTodo = {
                  name: todoName,
                  checked: false,
                  level: todoLevel,
                  day: todoLevel,
                  deadLine: deadLine,
                }
                //[todo] 기존 데이터 구조 바꾸기
                console.log(todoLevel)
                setModalOpen(false)
                setDeadLine(null)
                setTodoDay([])
                setTodoInfo('')
                setTodoName('')
                setTodoLevel(null)
              }}
            >
              할 일 추가하기
            </Button>
          </ModalContent>
        </ModalContainer>
      )}
    </div>
  )
}

export default CreateTodoModal
