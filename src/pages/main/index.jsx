import styled from 'styled-components';
import React from 'react';

import SideBar from './components/SideBar';
import TodoList from './components/TodoList';
import GraphBox from './components/GraphBox';

import { DateProvider } from './hooks/useDate';
import { TodoProvider } from '../../hooks/useTodo';

import CreateCompany from './components/CreateComapnyModal';
import { useCompanyData } from '../../hooks/useCompanyData';
import LoadingSpinner from '../../styles/LoadingSpinner';
//가장 바깥쪽의 큰 container
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

function MainPage() {
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
          }}
        >
          회사를 상장하여 LifeStock을 시작해보세요!
        </div>
        <CreateCompany onCreate={() => window.location.reload()} />
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
