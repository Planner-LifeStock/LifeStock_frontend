import styled from 'styled-components'
import SideBar from '../layouts/SideBar'
import TodoList from '../layouts/TodoList'
import GraphBox from '../layouts/GraphBox'
import { nvidia_logo } from '../assets'
import { useState } from 'react'

const Container = styled.div`
  display: flex;
  padding: 10px;
`

const EventContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #fffbfd;
  flex: 3 1 0;
`

const companyData = [
  {
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
      ['', 81000, 82000, 80000, 86000],
      ['', 80000, 81000, 82000, 87000],
      ['', 79000, 80000, 81000, 85000],
      ['', 73000, 75000, 78000, 81000],
      ['', 81000, 83000, 85000, 95000],
      ['', 82000, 84000, 81000, 97000],
      ['', 79000, 81000, 80000, 86000],
      ['', 81000, 83000, 84000, 89000],
      ['', 82000, 84000, 83000, 88000],
      ['', 80000, 82000, 85000, 87000],
      ['', 81000, 82000, 81000, 86000],
      ['', 78000, 79000, 81000, 85000],
      ['', 82000, 84000, 83000, 87000],
      ['', 81000, 82000, 80000, 86000],
      ['', 80000, 81000, 82000, 87000],
      ['', 79000, 80000, 81000, 85000],
      ['', 73000, 75000, 78000, 81000],
      ['', 81000, 83000, 85000, 95000],
      ['', 82000, 84000, 81000, 97000],
      ['', 79000, 81000, 80000, 86000],
      ['', 81000, 83000, 84000, 89000],
      ['', 82000, 84000, 83000, 88000],
      ['', 80000, 82000, 85000, 87000],
      ['', 81000, 82000, 81000, 86000],
      ['', 78000, 79000, 81000, 85000],
      ['', 82000, 84000, 83000, 87000],
      ['', 81000, 82000, 80000, 86000],
      ['', 80000, 81000, 82000, 87000],
      ['', 79000, 80000, 81000, 85000],
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
  {
    name: '밥먹기',
    logo: nvidia_logo,
    buyPrice: 55555,
    currentPrice: 40000,
    chartData: [
      ['Date', 'Low', 'Open', 'Close', 'High'],
      ['8/23', 76000, 78000, 79000, 80000],
      ['8/24', 80000, 82000, 83000, 85000],
      ['8/25', 83000, 85000, 84000, 87000],
      ['8/26', 82000, 83000, 81000, 84000],
      ['8/27', 81000, 82000, 83000, 86000],
      ['8/28', 83000, 84000, 85000, 88000],
      ['8/29', 84000, 85000, 87000, 89000],
      ['8/30', 87000, 88000, 86000, 89000],
      ['8/31', 86000, 87000, 88000, 90000],
      ['9/1', 88000, 89000, 87000, 91000],
      ['9/2', 87000, 88000, 89000, 92000],
      ['9/3', 90000, 91000, 92000, 94000],
      ['9/4', 92000, 93000, 91000, 95000],
    ],
    todo: [
      {
        checked: false,
        name: '돈까스먹기',
        level: 'hard',
        type: 'routine',
      },
      {
        checked: true,
        name: '제육덮밥먹기',
        level: 'normal',
        type: 'daily',
      },
    ],
  },
  {
    name: '숨쉬기',
    logo: nvidia_logo,
    buyPrice: 11111,
    currentPrice: 17000,
    chartData: [
      ['Date', 'Low', 'Open', 'Close', 'High'],
      ['9/18', 105000, 107000, 106000, 108000],
      ['9/19', 104000, 106000, 105000, 107000],
      ['9/20', 102000, 105000, 103000, 106000],
      ['9/21', 101000, 103000, 102000, 104000],
      ['9/22', 99000, 102000, 100000, 103000],
      ['9/23', 97000, 100000, 98000, 101000],
      ['9/24', 95000, 98000, 96000, 99000],
      ['9/25', 94000, 96000, 95000, 97000],
      ['9/26', 92000, 95000, 93000, 96000],
      ['9/27', 90000, 93000, 91000, 94000],
      ['9/28', 88000, 91000, 89000, 92000],
      ['9/29', 86000, 89000, 87000, 90000],
      ['9/30', 84000, 87000, 85000, 88000],
    ],
    todo: [
      {
        checked: false,
        name: '숨참기',
        level: 'hard',
        type: 'routine',
      },
      {
        checked: true,
        name: '숨 가끔 쉬기',
        level: 'hard',
        type: 'daily',
      },
    ],
  },
]

function MainPage() {
  //클릭시 데이터 변경되게끔
  const [currentCompany, setCompany] = useState(companyData[0])
  //오늘날짜 index
  const todayIndex = currentCompany.chartData.length - 1
  //현재가 data 3번째 값으로 지정
  const todayCurrentPrice = currentCompany.chartData[todayIndex][3]

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
    <Container>
      <EventContainer>
        <div style={{ flex: 3 }}>
          <GraphBox data={currentCompany} />
        </div>
        <div style={{ flex: 1 }}>
          <TodoList data={currentCompany.todo} updateTodo={updateTodo} />
        </div>
      </EventContainer>
      <SideBar companyData={companyData} setCompany={setCompany} />
    </Container>
  )
}

export default MainPage
