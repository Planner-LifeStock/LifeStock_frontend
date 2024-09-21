import {
  endOfMonth,
  getDay,
  getDaysInMonth,
  startOfMonth,
  subMonths,
} from 'date-fns'
import { addMonths } from 'date-fns/addMonths'
import { useState } from 'react'
import styled from 'styled-components'

const DayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110px;
  border: solid 1px black;
`

const DaysGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
  place-content: center;
  place-items: center;
`

const EmptyDay = styled(DayContainer)`
  background-color: transparent;
`

function ChartCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const renderCalendar = () => {
    const days = []

    const weekDays = ['일', '월', '화', '수', '목', '금', '토']
    weekDays.map(weekDay => {
      days.push(<DayContainer key={weekDay}>{weekDay}</DayContainer>)
    })

    const totalDays = getDaysInMonth(currentDate) //총 날짜
    const firstDayOfMonth = getDay(startOfMonth(currentDate)) //첫번째 날짜 요일 확인

    for (let emptyDay = 0; emptyDay < firstDayOfMonth; emptyDay++) {
      days.push(<DayContainer></DayContainer>)
    }

    for (let day = 1; day <= totalDays; day++) {
      days.push(<DayContainer>{day}</DayContainer>)
    }

    for (
      let fillDay = getDay(endOfMonth(currentDate));
      fillDay < 6;
      fillDay++
    ) {
      days.push(<DayContainer></DayContainer>)
    }
    return days
  }

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1))
  }

  return (
    <div>
      <button onClick={handlePrevMonth}>이전</button>
      <span>
        {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월{' '}
      </span>
      <button onClick={handleNextMonth}>다음</button>
      <div>
        <DaysGridContainer>{renderCalendar()}</DaysGridContainer>
      </div>
    </div>
  )
}

export default ChartCalendar
