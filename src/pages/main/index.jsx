import styled from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import SideBar from './components/SideBar';
import TodoList from './components/TodoList';
import GraphBox from './components/GraphBox';

import { DateProvider } from './hooks/useDate';
import { TodoProvider } from '../../hooks/useTodo';
import { useCompanyData } from '../../hooks/useCompanyData';

import CreateCompany from './components/CreateComapnyModal';
import LoadingSpinner from '../../styles/LoadingSpinner';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fffbfd;

  height: 92.5vh;
  width: 100%;

  overflow: hidden;
`;

const EventContainer = styled.div`
  display: flex;
  margin-top: 20px;
  height: 100%;
  width: 100%;
  background-color: #fffbfd;
`;

const Button = styled.button`
  background-color: transparent;
  color: #000;
  border: none;
  border-radius: ${(props) => props.theme.border.radius.small};

  margin-top: 20px;
  font-size: 16px;
  font-weight: ${(props) => props.theme.font.weight.bold};
  text-decoration: underline;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;

  &:focus {
    border: none;
    outline: none;
  }

  &:hover {
    opacity: 0.5;
  }
`

function MainPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/tutorial");
  };

  const { companyList, loading } = useCompanyData();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (companyList.length === 0) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: 'white',
          height: '100vh',
          marginTop: '-100px',
        }}
      >
        <div
          style={{
            fontSize: '80px',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          상장된 회사가 없습니다. 회사를 상장해보세요!
        </div>
        <CreateCompany onCreate={() => window.location.reload()} />
        <Button onClick={handleButtonClick}>튜토리얼 보기</Button>
      </div>
    );
  }

  return (
    <DateProvider>
      <TodoProvider>
        <Container>
          <EventContainer>
            <div style={{ flex: 6 }}>
              <GraphBox />
            </div>
            <div style={{ flex: 1 }}>
              <TodoList />
            </div>
            <div style={{ flex: 2 }}>
              <SideBar />
            </div>
          </EventContainer>
        </Container>
      </TodoProvider>
    </DateProvider>
  );
}

export default MainPage;
