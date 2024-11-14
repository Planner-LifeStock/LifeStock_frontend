// TodoContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { API } from '../api/axios';
import { useCompanyData } from './useCompanyData';
import { useUser } from './useUser';
import { format } from 'date-fns';
import { useDate } from '../pages/main/hooks/useDate';

// Context 생성
const TodoContext = createContext();

// Provider 컴포넌트 구현
export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(null);
  const { selectedDate, setSelectedDate } = useDate();
  const { userData } = useUser();
  const { activeCompany } = useCompanyData();

  // 할 일 목록을 가져오는 함수
  const fetchTodoList = async () => {
    try {
      const formattedDate = format(selectedDate, 'yyyy-MM-dd'); // 날짜 포맷을 'yyyy-MM-dd'로 변환
      const result = await API.get(`/todo?companyId=${activeCompany.id}&date=${formattedDate}`);
      setTodoList(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 의존성 배열을 이용해 userData, activeCompany, selectedDate가 변경될 때 fetchTodoList 호출
  useEffect(() => {
    if (userData && activeCompany && selectedDate) {
      fetchTodoList();
    }
  }, [userData, activeCompany, selectedDate]);

  return (
    <TodoContext.Provider
      value={{
        todoList,
        setTodoList,
        selectedDate,
        setSelectedDate,
        fetchTodoList,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
