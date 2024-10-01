import { useRef, useState } from 'react';
import Button from '../Button';
import InputBox from '../InputBox';
import OptionButton from '../OptionButton';
import Tip from '../Tip';
import ImgAdd from '../ImageAdd';
import AssetBox from '../AssetBox';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { API } from '../../api/axios';
import { useUser } from '../../hooks/useUser';

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
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  width: 520px;
  height: 750px;
  padding: 15px;
  border-radius: 16px;
`;

const InnerContainer = styled.div`
  padding: 10px;
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  margin-bottom: 30px;
`;

const Title = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 5px;
`;
const TitleBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: end;
  min-height: 60px;
  margin-bottom: 20px;
`;
const StyledDatePicker = styled(DatePicker)`
  width: 480px;
  height: 40px;
  font-size: 16px;
  padding: 8px;
  border-radius: 16px;
  background-color: #dfdfdf;
  font-size: 20px;
  border: 0px;
`;

function CreateTodoModal({ activeCompany, handleAddNewTodo }) {
  const [modalOpen, setModalOpen] = useState(false); //모달 useState
  const modalBackgorund = useRef();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState(null);
  const [days, setDays] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const defaultLevelTip = '난이도에 따라 플랜을 수행했을 때의 주가의 등락율이 결정돼요!';
  const levelArr = { 최하: 'LEVEL_1', 하: 'LEVEL_2', 보통: 'LEVEL_3', 상: 'LEVEL_4', 최상: 'LEVEL_5' };
  const dayArr = {
    월: 'MONDAY',
    화: 'TUESDAY',
    수: 'WEDNESDAY',
    목: 'THURSDAY',
    금: 'FRIDAY',
    토: 'SATURDAY',
    일: 'SUNDAY',
  };

  const convertDaysToValues = (daysArray, dayObject) => {
    return daysArray.map(day => dayObject[day]);
  };

  const formatDate = date => date.toISOString().split('T')[0];

  //[todo] 유저 데이터 가져오기
  const { userData } = useUser();

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
              setModalOpen(false);
              setModalOpen(false);
              setEndDate(null);
              setDays([]);
              setDescription('');
              setTitle('');
              setLevel(null);
            }
          }}
        >
          <ModalContent>
            <InnerContainer>
              <TitleBox>
                <img src={activeCompany.logo.url} height="50px" style={{ borderRadius: '100%', marginRight: 8 }} />
                <div style={{ fontSize: 30, fontWeight: 600 }}>{activeCompany.name}</div>
              </TitleBox>
              <div>
                <Title>이름</Title>
                <InputBox
                  width={480}
                  placeholder={'ex)아침 8시에 러닝 뛰기'}
                  value={title}
                  onChange={e => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div>
                <Title>설명</Title>
                <InputBox
                  width={480}
                  placeholder={'(생략가능)'}
                  value={description}
                  onChange={e => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <div style={{ width: '100%' }}>
                <Title>난이도</Title>
                <OptionButton OptionList={Object.keys(levelArr)} currentState={level} SetState={setLevel} />
                <Tip defaultTip={defaultLevelTip} changeTip={false}></Tip>
              </div>
              <div style={{ width: '100%' }}>
                <Title>요일</Title>
                <OptionButton OptionList={Object.keys(dayArr)} currentState={days} SetState={setDays} multiple={true} />
              </div>
              <div>
                <Title>시작 날짜</Title>
                <StyledDatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  dateFormat="yyyy.MM.dd"
                  placeholderText="시작 날짜를 선택하세요(선택)"
                />
              </div>
              <div>
                <Title>마감날짜</Title>
                <StyledDatePicker
                  selected={endDate}
                  onChange={date => setEndDate(date)}
                  dateFormat="yyyy.MM.dd"
                  placeholderText="마감 날짜를 선택하세요(선택)"
                />
              </div>
            </InnerContainer>

            <Button
              width={'100%'}
              onClick={async () => {
                try {
                  const newTodo = {
                    userId: userData.id,
                    companyId: activeCompany.id,
                    title: title,
                    description: description,
                    level: levelArr[level],
                    days: convertDaysToValues(days, dayArr),
                    startDate: formatDate(startDate),
                    endDate: formatDate(endDate),
                  };
                  console.log(newTodo);
                  const result = await API.post('/todo', newTodo);
                  handleAddNewTodo(result.data);
                  // 성공하면 모달 닫기 및 상태 초기화
                  setModalOpen(false);
                  setStartDate(null);
                  setEndDate(null);
                  setDays([]);
                  setDescription('');
                  setTitle('');
                  setLevel(null);
                } catch (error) {
                  console.error('할 일 추가 중 오류 발생:', error);
                  alert('할 일 추가 중 문제가 발생했습니다.');
                }
              }}
            >
              할 일 추가하기
            </Button>
          </ModalContent>
        </ModalContainer>
      )}
    </div>
  );
}

export default CreateTodoModal;
