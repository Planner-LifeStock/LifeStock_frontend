import styled from 'styled-components';
import React from 'react';

import SideBar from './components/SideBar';
import TodoList from './components/TodoList';
import GraphBox from './components/GraphBox';

import { DateProvider } from './hooks/useDate';
import { TodoProvider } from '../../hooks/useTodo';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fffbfd;

  height: 92.5vh;
  width: 100%;
  padding: 5px;

  overflow: hidden;
`;

const EventContainer = styled.div`
  display: flex;

  height: 100%;
  width: 100%;
  background-color: #fffbfd;
`;

function MainPage() {
  return (
    <DateProvider>
      <TodoProvider>
        <Container>
          <EventContainer>
            <div style={{ flex: 3 }}>
              <GraphBox />
            </div>
            <div style={{ flex: 1, marginLeft: '20px' }}>
              <TodoList />
            </div>
            <div style={{ flex: 1 }}>
              <SideBar />
            </div>
          </EventContainer>
        </Container>
      </TodoProvider>
    </DateProvider>
  );
}

export default MainPage;
