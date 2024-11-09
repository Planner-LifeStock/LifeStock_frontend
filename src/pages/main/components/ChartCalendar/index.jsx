import styled from 'styled-components'

import { endOfMonth, getDay, getDaysInMonth, startOfMonth, subMonths, addMonths, isToday} from 'date-fns'
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
// const [currentDate, setCurrentDate] = useState(new Date())
const { selectedDate, setSelectedDate, currentDate, setCurrentDate} = useDate();

const renderCalendar = () => {
  const days = [];

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  weekDays.forEach((weekDay, index) => {
      days.push(
          <DayOfWeekContainer key={`weekday-${index}`}>{weekDay}</DayOfWeekContainer>
      );
  });

  const totalDays = getDaysInMonth(currentDate); // 총 날짜
  const firstDayOfMonth = getDay(startOfMonth(currentDate)); // 첫번째 날짜 요일 확인

  // 월 시작 전 빈 칸 추가
  for (let emptyDay = 0; emptyDay < firstDayOfMonth; emptyDay++) {
      days.push(<DayContainer key={`empty-${emptyDay}`}></DayContainer>);
  }

  // 달력의 실제 날짜 추가
  for (let day = 1; day <= totalDays; day++) {
      const isToday = new Date().getMonth() === currentDate.getMonth() && new Date().getDate() === day;
      const isSelected = selectedDate.getFullYear() === currentDate.getFullYear() && selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getDate() === day;


      // Find the changeRate for the current day
      const dayString = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      const dayData = chartData?.charts?.find((chart) => chart.date === dayString);
      const changeRate = dayData ? dayData.changeRate.toFixed(2) : null;
      
      days.push(
          <DayContainer
              key={`day-${day}`}
              $isToday={isToday}
              $isSelected={isSelected}
              onClick={() =>
                  setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))
              }
          >
              {day}일
          </DayContainer>
      );
  }

  // 월 끝 이후 빈 칸 추가
  const fillDays = 6 - getDay(endOfMonth(currentDate));
  for (let fillDay = 0; fillDay < fillDays; fillDay++) {
      days.push(<DayContainer key={`fill-${fillDay}`}></DayContainer>);
  }

  return days;
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