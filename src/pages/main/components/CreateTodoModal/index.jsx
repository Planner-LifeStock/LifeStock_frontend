import { useRef, useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Button from '../../../../components/Button';
import InputBox from '../../../../components/InputBox';
import OptionButton from '../../../../components/OptionButton';
import Tip from '../../../../components/Tip';

import { API } from '../../../../api/axios'; // 이거 정리 필요 API 직접 사용 X
import { useUser } from '../../../../hooks/useUser';
import { useCompanyData } from '../../../../hooks/useCompanyData';

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 520px;
  height: 850px;
  padding: 15px;
  border-radius: ${(props) => props.theme.border.radius.small};
`;

const InnerContainer = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 500px;
  height: 100%;
  margin-bottom: 30px;
`;

const Title = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.font.size.xLarge};
  font-weight: ${(props) => props.theme.font.weight.bold};
  margin-bottom: 5px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;  
  width: 90%;
  min-height: 60px;
  margin-bottom: 20px;
`;

const StyledDatePicker = styled(DatePicker)`
  font-size: ${(props) => props.theme.font.size.primary};  
  width: 480px;
  height: 40px;
  padding: 8px;
  border-radius: ${(props) => props.theme.border.radius.small};
  background-color: #dfdfdf;
  font-size: 20px;
  border: 0px;
`;

function CreateTodoModal( {handleAddNewTodo} ) {
  const { userData, setUserData } = useUser();
  const { companyList, setCompanyList, activeCompany, setActiveCompany } = useCompanyData();

  const [modalOpen, setModalOpen] = useState(false);
  const modalBackgorund = useRef();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState(null);
  const [days, setDays] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [formError, setFormError] = useState(null);

  const defaultLevelTip = '난이도에 따라 플랜을 수행했을 때의 주가의 등락율이 결정돼요!';

  const levelArr = { 
    최하: 'LEVEL_1', 
    하: 'LEVEL_2', 
    보통: 'LEVEL_3', 
    상: 'LEVEL_4', 
    최상: 'LEVEL_5' 
  };

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

  // const formatDate = date => date.toISOString().split('T')[0];
  const formatDate = date => (date ? date.toISOString().split('T')[0] : null);

  return (
    <div>
      <Button onClick={() => setModalOpen(true)}>할 일 추가하기</Button>

      {modalOpen && (
          <ModalContainer
            ref={modalBackgorund}
            onClick={e => {
              if (e.target === modalBackgorund.current) {
                setModalOpen(false);
                setStartDate(null);
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
                    <Title>마감 날짜</Title>
                    <StyledDatePicker
                      selected={endDate}
                      onChange={date => setEndDate(date)}
                      dateFormat="yyyy.MM.dd"
                      placeholderText="마감 날짜를 선택하세요(선택)"
                    />
                  </div>
              </InnerContainer>

              <Button
                width="100%"
                onClick={async () => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);

                  if (startDate && startDate < today) {
                    alert('시작 날짜는 오늘 이후로 선택해야 합니다.');
                    return;
                  }

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
                    
                    const result = await API.post(`/todo?companyId=${activeCompany.id}&date=2024-11-04`, newTodo);
                    handleAddNewTodo(result.data);
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