import styled from 'styled-components'
import SideBar from '../layouts/SideBar'
import TodoList from '../layouts/TodoList'
import GraphBox from '../layouts/GraphBox'
import { nvidia_logo } from '../assets'
import { useState } from 'react'
import TopBar from '../layouts/TopBar'
import { useNavigate } from 'react-router-dom' // 내가 추가한 로그인페이지와 연결하는 것

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px;
`

const EventContainer = styled.div`
  display: flex;
  height: 100%;
  background-color: #fffbfd;
  flex: 3 1 0;
`

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
]

function MainPage() {
  const [companyData, setCompanyData] = useState(companyFirstData)

  //클릭시 데이터 변경되게끔
  const [currentCompany, setCompany] = useState(companyData[0])
  //오늘날짜 index
  const todayIndex = currentCompany.chartData.length - 1
  //현재가 data 3번째 값으로 지정
  const todayCurrentPrice = currentCompany.chartData[todayIndex][3]

  const navigate = useNavigate()

  //[todo] 백앤드 서버에게 post요청하기
  const updateTodo = (index, newCheck) => {
    const updatedTodos = currentCompany.todo.map((todo, idx) => {
      if (idx === index) {
        return { ...todo, checked: newCheck }
      }
      return todo
    })

    const updatedChartData = [...currentCompany.chartData]

    if (newCheck) {
      updatedChartData[todayIndex][3] += 5000
    } else {
      updatedChartData[todayIndex][3] -= 5000
    }

    setCompany({
      ...currentCompany,
      todo: updatedTodos,
      chartData: updatedChartData,
    })
  }

  return (
    <div>
      <TopBar />
      <Container>
        <EventContainer>
          <div style={{ flex: 3 }}>
            <GraphBox data={currentCompany} />
          </div>
          <div style={{ flex: 1 }}>
            <TodoList data={currentCompany} updateTodo={updateTodo} />
          </div>
        </EventContainer>
        <SideBar
          companyData={companyData}
          setCompanyData={setCompanyData}
          setCompany={setCompany}
        />
      </Container>
    </div>
  )
}

export default MainPage
export { companyFirstData }
