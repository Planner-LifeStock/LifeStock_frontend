import styled from 'styled-components'
import { endOfMonth, getDay, getDaysInMonth, startOfMonth, subMonths, addMonths } from 'date-fns'
import { useDate } from '../../hooks/useDate'
import { useChartData } from '../../../../hooks/useChart';

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
  position: relative; /* 내부 요소의 절대 위치를 기준으로 삼음 */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  width: 100%;
  height: 95px;
  
  border: ${({ $isSelected }) =>
    $isSelected ? `solid 3px red` : `solid 1px black`};
  background-color: ${({ isSelected }) => (isSelected ? `#eaeaea` : ``)};
  
  box-sizing: border-box;
`;

const DayText = styled.div`
  position: absolute;
  top: 5px; /* DayContainer의 상단에서 5px 아래 */
  font-size: 0.9rem;
  color: ${({ isToday }) => (isToday ? `red` : `black`)};
`;

const ChangeRateText = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  font-weight: bold;
  color: ${({ color }) => color};
`;

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
  const { selectedDate, setSelectedDate, currentDate, setCurrentDate } = useDate();
  const { chartData } = useChartData();

  const renderCalendar = () => {
    const days = [];
    const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
    
    weekDays.forEach((weekDay, index) => {
      days.push(
        <DayOfWeekContainer key={`weekday-${index}`}>{weekDay}</DayOfWeekContainer>
      );
    });

    const totalDays = getDaysInMonth(currentDate);
    const firstDayOfMonth = getDay(startOfMonth(currentDate));

    // 월 시작 전 빈 칸 추가
    for (let emptyDay = 0; emptyDay < firstDayOfMonth; emptyDay++) {
      days.push(<DayContainer key={`empty-${emptyDay}`}></DayContainer>);
    }

    // 달력의 실제 날짜 추가
    for (let day = 1; day <= totalDays; day++) {
      const isToday = new Date().getMonth() === currentDate.getMonth() && new Date().getDate() === day;
      const isSelected = selectedDate.getFullYear() === currentDate.getFullYear() && selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getDate() === day;

      const dayString = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      const dayData = chartData?.chartList?.find((chart) => chart.date === dayString);
      const changeRate = dayData ? dayData.changeRate.toFixed(2) : null;

      const changeRateColor = changeRate > 0 ? 'red' : changeRate < 0 ? 'blue' : 'black';

      days.push(
        <DayContainer
          key={`day-${day}`}
          $isToday={isToday}
          $isSelected={isSelected}
          onClick={() =>
            setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))
          }
        >
          <DayText isToday={isToday}>{day}일</DayText>
          {changeRate && (
            <ChangeRateText style={{ color: changeRateColor }}>
              {changeRate}%
            </ChangeRateText>
          )}
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
    setCurrentDate(subMonths(currentDate, 1));
  }

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
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

export default ChartCalendar;