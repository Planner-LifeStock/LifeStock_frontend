import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { addDays, subDays } from 'date-fns';

import CheckBox from '../CheckBox';
import CreateTodoModal from '../CreateTodoModal';

import { useDate } from '../../hooks/useDate';
import { useUser } from '../../../../hooks/useUser';
import { useCompanyData } from '../../../../hooks/useCompanyData';
import { API } from '../../../../api/axios';


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
`

function TodoList() {
  const { userData, setUserData } = useUser();
  const { companyList, setComapnyList, activeCompany, setActiveCompany} = useCompanyData();
  const { selectedDate, setSelectedDate } = useDate();

  const [todoList, setTodoList] = useState(null);

  const handleAddNewTodo = newTodo => {
    setTodoList(prevList => [...prevList, newTodo]);
  };

  useEffect(() => {
    if (userData && activeCompany) {
      const fetchTodoList = async () => {
        try {
          const result = await API.get(`/todo?userId=${userData.id}&companyId=${activeCompany.id}&date=2024-11-29`);
          setTodoList(result.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchTodoList();
    }
  }, [userData, activeCompany]);

  const handleCheckBoxChange = async index => {
    const updatedTodoList = [...todoList];
    const todo = updatedTodoList[index];

    const updatedCompleted = !todo.completed;
    todo.completed = updatedCompleted;

    setTodoList(updatedTodoList);

    try {
      await API.put(`/todo/complete/%7BtodoId%7D`, { completed: updatedCompleted });
    } catch (error) {
      console.error('todoCheck 중 오류 발생:', error);
    }
  };

  const handleAddDays = (days) => {
    setSelectedDate((prevDate) => addDays(prevDate, days));
  };

  const handleSubtractDays = (days) => {
    setSelectedDate((prevDate) => subDays(prevDate, days));
  };


  return (
    <ContainerWrapper>
      <Container>
        <div>
          <div style={{ display: "flex", justifyContent: "center"}}>
            <h2>TodoList</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <MoveButton onClick={() => {handleSubtractDays(1)}}>{'<<'}</MoveButton>
              <h2>{selectedDate.getMonth() + 1}월 {selectedDate.getDate()}일</h2>
            <MoveButton onClick={() => {handleAddDays(1)}}>{'>>'}</MoveButton>
          </div>
          <div>
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
            })} </div>
        </div>
        <CreateTodoModal handleAddNewTodo={handleAddNewTodo}/>
      </Container>
    </ContainerWrapper>
  );
}

export default TodoList;
