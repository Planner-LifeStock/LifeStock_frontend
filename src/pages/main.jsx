import styled from 'styled-components';
import SideBar from '../layouts/SideBar';
import TodoList from '../layouts/TodoList';
import GraphBox from '../layouts/GraphBox';
import { nvidia_logo } from '../assets';
import { useEffect, useState } from 'react';
import TopBar from '../layouts/TopBar';
import { useNavigate } from 'react-router-dom'; // 내가 추가한 로그인페이지와 연결하는 것
import { API } from '../api/axios';
import CompanyList from '../components/CompanyList';
import { useUser } from '../hooks/useUser';
import { useCompanyData } from '../hooks/useCompanyData';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px;
`;

const EventContainer = styled.div`
  display: flex;
  height: 100%;
  background-color: #fffbfd;
  flex: 3 1 0;
`;

const companyFirstData = [
  {
    username: '최정혁',
    name: '아침운동',
    logo: nvidia_logo,
    buyPrice: 70000,
    currentPrice: 15000,
    chartData: [
      ['Date', 'Low', 'Open', 'Close', 'High'],
      ['', 73000, 75000, 79000, 81000],
      ['', 81000, 83000, 85000, 95000],
      ['', 82000, 84000, 81000, 97000],
      ['', 79000, 81000, 80000, 86000],
      ['', 81000, 83000, 84000, 89000],
      ['', 82000, 84000, 83000, 88000],
      ['', 80000, 82000, 85000, 87000],
      ['', 81000, 82000, 81000, 86000],
      ['', 78000, 79000, 81000, 85000],
      ['', 82000, 84000, 83000, 87000],
    ],
    todo: [
      {
        checked: false,
        name: '러닝',
        level: 'easy',
        type: 'routine',
      },
      {
        checked: false,
        name: '몸풀기',
        level: 'easy',
        type: 'daily',
      },
      {
        checked: false,
        name: '턱걸이',
        level: 'easy',
        type: 'routine',
      },
      {
        checked: false,
        name: '팔굽혀펴기',
        level: 'easy',
        type: 'daily',
      },
    ],
  },
];

function MainPage() {
  const { companyList, setCompanyList, activeCompany, setActiveCompany } = useCompanyData();
  const { userData, setUserData } = useUser();
  return (
    <div>
      <TopBar />
      <Container>
        {/* <EventContainer>
          <div style={{ flex: 3 }}>
            <GraphBox data={currentCompany} />
          </div>
          <div style={{ flex: 1 }}>
            <TodoList data={currentCompany} updateTodo={updateTodo} />
          </div>
        </EventContainer> */}
        <SideBar companyList={companyList} activeCompany={activeCompany} setActiveCompany={setActiveCompany} userData={userData} />
      </Container>
    </div>
  );
}

export default MainPage
