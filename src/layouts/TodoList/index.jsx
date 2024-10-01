import styled from 'styled-components';
import Button from '../../components/Button';
import CheckBox from '../../components/CheckBox';
import CreateTodoModal from '../../components/CreatTodoModal';
import { useEffect, useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { API } from '../../api/axios';

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
  flex-grow: 1;
`;

function TodoList({ activeCompany }) {
  const { userData } = useUser();

  const [todoList, setTodoList] = useState(null);

  const handleAddNewTodo = newTodo => {
    setTodoList(prevList => [...prevList, newTodo]);
  };

  useEffect(() => {
    if (userData && activeCompany) {
      const fetchTodoList = async () => {
        try {
          const result = await API.get(`/todo?userId=${userData.id}&companyId=${activeCompany.id}&date=2024-03-29`);
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

  return (
    <ContainerWrapper>
      <Container>
        <div>
          <h2>todoList</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h2>8월 5일</h2>
          </div>
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
        <CreateTodoModal activeCompany={activeCompany} handleAddNewTodo={handleAddNewTodo} />
      </Container>
    </ContainerWrapper>
  );
}

export default TodoList;
