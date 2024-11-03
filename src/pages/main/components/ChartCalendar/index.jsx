import styled from 'styled-components'

import { endOfMonth, getDay, getDaysInMonth, startOfMonth, subMonths, isToday} from 'date-fns'
import { addMonths } from 'date-fns'
import { useState } from 'react'

import { useDate } from '../../hooks/useDate'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items; center;
`

const Button = styled.button`
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

const DayContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 95px;

  border: ${({ $isSelected }) =>
    $isSelected ? `solid 3px red` : `solid 1px black`};
  background-color: ${({ isSelected }) => (isSelected ? `#eaeaea` : ``)};

  font-size: ${(props) => props.theme.font.size.primary};
  box-sizing: border-box;
  color: ${({ isToday }) => (isToday ? `red` : ``)};
`

const SelectDayContainer = styled(DayContainer)`
  border: solid 3px #3181f8;
  color: red;
  font-weight: ${(props) => props.theme.font.weight.extraBold};
  box-sizing: border-box;
`

const DayOfWeekContainer = styled(DayContainer)`
  align-items: center;
  height: 60px;
  
  font-size: ${(props) => props.theme.font.size.xLarge};
  font-weight: ${(props) => props.theme.font.weight.extraBold};
  
  background-color: rgb(49, 129, 248, 0.8);
  color: white;
  box-sizing: border-box;
`

const DaysGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  place-content: center;
  place-items: center;
  border: solid 1px black;
  box-sizing: border-box;
`

function ChartCalendar() {
const [currentDate, setCurrentDate] = useState(new Date())
const { selectedDate, setSelectedDate } = useDate();

const renderCalendar = () => {
    const days = []

    const weekDays = ['일', '월', '화', '수', '목', '금', '토']
    weekDays.map(weekDay => {
    days.push(
        <DayOfWeekContainer key={weekDay}>{weekDay}</DayOfWeekContainer>
    )
    })

    const totalDays = getDaysInMonth(currentDate) //총 날짜
    const firstDayOfMonth = getDay(startOfMonth(currentDate)) //첫번째 날짜 요일 확인

    for (let emptyDay = 0; emptyDay < firstDayOfMonth; emptyDay++) {
    days.push(<DayContainer></DayContainer>)
    }

    for (let day = 1; day <= totalDays; day++) {
    const isToday =
        new Date().getMonth() === currentDate.getMonth() &&
        new Date().getDate() === day

    const isSelected =
        selectedDate.getFullYear() === currentDate.getFullYear() &&
        selectedDate.getMonth() === currentDate.getMonth() &&
        selectedDate.getDate() === day

    days.push(
        <DayContainer
        $isToday={isToday}
        $isSelected={isSelected}
        onClick={() =>
            setSelectedDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
            )
        }
        >
        {day}일
        </DayContainer>
    )
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
    <Container>
      <Button onClick={handlePrevMonth}>이전</Button>
      <h2>{currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월{' '}</h2>
      <Button onClick={handleNextMonth}>다음</Button>
    </Container>
    <DaysGridContainer>{renderCalendar()}</DaysGridContainer>
    <div style={{display: "flex", justifyContent: "center"}}>
      <h2>
        선택된 날짜 : {selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월 {selectedDate.getDate()}일
      </h2>
    </div>
  </div>
)
}

export default ChartCalendar