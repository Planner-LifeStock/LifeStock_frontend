import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { subMonths, addMonths, addDays, subDays, format, isSameDay } from 'date-fns';

import CheckBox from '../CheckBox';
import CreateTodoModal from '../CreateTodoModal';

import { useDate } from '../../hooks/useDate';
import { useUser } from '../../../../hooks/useUser';
import { useCompanyData } from '../../../../hooks/useCompanyData';
import { API } from '../../../../api/axios';
import { useChartData } from '../../../../hooks/useChart';
import { useTodo } from '../../../../hooks/useTodo';

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Container = styled.div`
  width: 328px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
`;

const MoveButton = styled.button`
  border: none;
  background-color: #fffbfd;

  &:focus {
    border: none;
    outline: none;
  }

  &:hover {
    opacity: 0.5;
  }
`;

// 모달 컴포넌트 정의
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
`;

const CloseButton = styled.button`
  margin-top: 15px;
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function TodoList() {
  const { fetchChartData } = useChartData();
  const { setTodoList, todoList } = useTodo();
  const { selectedDate, setSelectedDate, currentDate, setCurrentDate, handleAddDays, handleSubtractDays } = useDate();

  const [showModal, setShowModal] = useState(false); // 모달 상태
  const [modalMessage, setModalMessage] = useState(''); // 모달 메시지

  // selectedDate를 종속성 배열에 추가하여 변경 시 실행

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Enter' && showModal) {
        setShowModal(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal]);

  const handleCheckBoxChange = async index => {
    const today = new Date();
    if (!isSameDay(today, selectedDate)) {
      setModalMessage('할 일 완료 체크는 당일에만 가능합니다.');
      setShowModal(true);
      return;
    }
    const updatedTodoList = [...todoList];
    const todo = updatedTodoList[index];

    if (todo.completed) {
      setModalMessage('완료된 일은 다시 되돌릴 수 없습니다.');
      setShowModal(true);
      return;
    }

    const updatedCompleted = !todo.completed;
    todo.completed = updatedCompleted;

    setTodoList(updatedTodoList);
    try {
      // `API.put` 요청이 완료될 때까지 기다림
      await API.put(`/todo/complete/${todo.id}`, { completed: updatedCompleted });
      // `API.put` 요청이 완료된 후에 `fetchChartData` 호출
      await fetchChartData();
    } catch (error) {
      console.error('todoCheck 중 오류 발생:', error);
    }
  };

  return (
    <ContainerWrapper>
      <Container>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h2>TodoList</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <MoveButton
              onClick={() => {
                handleSubtractDays(1);
              }}
            >
              {'<<'}
            </MoveButton>
            <h2>
              {selectedDate.getMonth() + 1}월 {selectedDate.getDate()}일
            </h2>
            <MoveButton
              onClick={() => {
                handleAddDays(1);
              }}
            >
              {'>>'}
            </MoveButton>
          </div>
          <div style={{ maxHeight: '750px', overflowY: 'auto' }}>
            {todoList &&
              todoList.map(({ title, level, completed }, index) => {
                return (
                  <CheckBox
                    key={index}
                    completed={completed}
                    title={title}
                    level={level}
                    onChange={() => {
                      handleCheckBoxChange(index);
                    }}
                  />
                );
              })}
          </div>
        </div>
        <CreateTodoModal />
      </Container>

      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <p>{modalMessage}</p>
            <CloseButton onClick={() => setShowModal(false)}>확인</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </ContainerWrapper>
  );
}

export default TodoList;

// import styled from 'styled-components';
// import { useEffect, useState } from 'react';
// import { addDays, subDays, format, isSameDay } from 'date-fns';

// import CheckBox from '../CheckBox';
// import CreateTodoModal from '../CreateTodoModal';

// import { useDate } from '../../hooks/useDate';
// import { useUser } from '../../../../hooks/useUser';
// import { useCompanyData } from '../../../../hooks/useCompanyData';
// import { API } from '../../../../api/axios';
// import { useChartData } from '../../../../hooks/useChart';
// import { useTodo } from '../../../../hooks/useTodo';

// const ContainerWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
// `;

// const Container = styled.div`
//   width: 328px;
//   padding: 20px 16px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   flex-grow: 1;
// `;

// const MoveButton = styled.button`
//   border: none;
//   background-color: #fffbfd;

//   &:focus {
//     border: none;
//     outline: none;
//   }

//   &:hover {
//     opacity: 0.5;
//   }
// `;

// // 모달 컴포넌트 정의
// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 999;
// `;

// const ModalContent = styled.div`
//   background: #fff;
//   padding: 20px;
//   border-radius: 8px;
//   width: 300px;
//   text-align: center;
// `;

// const CloseButton = styled.button`
//   margin-top: 15px;
//   padding: 8px 16px;
//   border: none;
//   background-color: #007bff;
//   color: white;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// function TodoList({selectedDate,setSelectedDate,handlePrevMonth,handleNextMonth}){
//   const { fetchChartData } = useChartData();
//   const { setTodoList, selectedDate, setSelectedDate, todoList } = useTodo();

//   const [showModal, setShowModal] = useState(false); // 모달 상태
//   const [modalMessage, setModalMessage] = useState(''); // 모달 메시지

//   // selectedDate를 종속성 배열에 추가하여 변경 시 실행

//   useEffect(() => {
//     const handleKeyDown = event => {
//       if (event.key === 'Enter' && showModal) {
//         setShowModal(false);
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [showModal]);

//   const handleCheckBoxChange = async index => {
//     const today = new Date();
//     if (!isSameDay(today, selectedDate)) {
//       setModalMessage('할 일 완료 체크는 당일에만 가능합니다.');
//       setShowModal(true);
//       return;
//     }
//     const updatedTodoList = [...todoList];
//     const todo = updatedTodoList[index];

//     if (todo.completed) {
//       setModalMessage('완료된 일은 다시 되돌릴 수 없습니다.');
//       setShowModal(true);
//       return;
//     }

//     const updatedCompleted = !todo.completed;
//     todo.completed = updatedCompleted;

//     setTodoList(updatedTodoList);
//     try {
//       // `API.put` 요청이 완료될 때까지 기다림
//       await API.put(`/todo/complete/${todo.id}`, { completed: updatedCompleted });
//       // `API.put` 요청이 완료된 후에 `fetchChartData` 호출
//       await fetchChartData();
//     } catch (error) {
//       console.error('todoCheck 중 오류 발생:', error);
//     }
//   };

//   const handleAddDays = days => {
//     setSelectedDate(prevDate => addDays(prevDate, days));
//   };

//   const handleSubtractDays = days => {
//     //setSelectedDate(prevDate => subDays(prevDate, days));
//     setSelectedDate((prevDate) => {
//       const newDate = subDays(prevDate, days);

//       // 현재 날짜의 월과 newDate의 월을 비교
//       if (getMonth(newDate) !== getMonth(prevDate)) {
//         handlePrevMonth(); // 월이 변경된 경우 handlePrevMonth 실행
//       }

//       return newDate;
//     });
//   };

//   return (
//     <ContainerWrapper>
//       <Container>
//         <div>
//           <div style={{ display: 'flex', justifyContent: 'center' }}>
//             <h2>TodoList</h2>
//           </div>
//           <div style={{ display: 'flex', justifyContent: 'center' }}>
//             <MoveButton
//               onClick={() => {
//                 handleSubtractDays(1);
//               }}
//             >
//               {'<<'}
//             </MoveButton>
//             <h2>
//               {selectedDate.getMonth() + 1}월 {selectedDate.getDate()}일
//             </h2>
//             <MoveButton
//               onClick={() => {
//                 handleAddDays(1);
//               }}
//             >
//               {'>>'}
//             </MoveButton>
//           </div>
//           <div>
//             {todoList &&
//               todoList.map(({ title, level, completed }, index) => {
//                 return (
//                   <CheckBox
//                     key={index}
//                     completed={completed}
//                     title={title}
//                     level={level}
//                     onChange={() => {
//                       handleCheckBoxChange(index);
//                     }}
//                   />
//                 );
//               })}
//           </div>
//         </div>
//         <CreateTodoModal />
//       </Container>

//       {showModal && (
//         <ModalOverlay>
//           <ModalContent>
//             <p>{modalMessage}</p>
//             <CloseButton onClick={() => setShowModal(false)}>확인</CloseButton>
//           </ModalContent>
//         </ModalOverlay>
//       )}
//     </ContainerWrapper>
//   );
// }

// export default TodoList;
