// import React, { createContext, useState, useContext } from 'react';

// const DateContext = createContext();

// export const DateProvider = ({ children }) => {
//   const [selectedDate, setSelectedDate] = useState(new Date);
//   const [currentDate, setCurrentDate] = useState(new Date()); // currentDate 추가

//   return (
//     <DateContext.Provider value={{ selectedDate, setSelectedDate, currentDate, setCurrentDate }}>
//       {children}
//     </DateContext.Provider>
//   );
// };

// export const useDate = () => useContext(DateContext);


// DateProvider.jsx
import React, { createContext, useContext, useState } from 'react';
import { addDays, subDays, addMonths, subMonths } from 'date-fns';

const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  // const handleAddDays = (days) => {
  //   setSelectedDate((prevDate) => {
  //     const newDate = addDays(prevDate, days);
  //     // 최신 currentDate를 참조하여 업데이트
  //     setCurrentDate((prevCurrentDate) => {
  //       if (newDate.getMonth() !== prevDate.getMonth()) {
  //         return new Date(prevCurrentDate.getFullYear(), newDate.getMonth(), 1);
  //       }
  //       return prevCurrentDate;
  //     });
  //     return newDate;
  //   });
  // };

  // const handleSubtractDays = (days) => {
  //   setSelectedDate((prevDate) => {
  //     const newDate = subDays(prevDate, days);
  //     // 최신 currentDate를 참조하여 업데이트
  //     setCurrentDate((prevCurrentDate) => {
  //       if (newDate.getMonth() !== prevDate.getMonth()) {
  //         return new Date(prevCurrentDate.getFullYear(), newDate.getMonth(), 1);
  //       }
  //       return prevCurrentDate;
  //     });
  //     return newDate;
  //   });
  // };

  const handleAddDays = (days) => {
    setSelectedDate((prevDate) => {
      const newDate = addDays(prevDate, days);
  
      setCurrentDate((prevCurrentDate) => {
        if (newDate.getMonth() > prevDate.getMonth()) {
          return addMonths(prevCurrentDate, 1); // 다음 달로 이동
        } else if (newDate.getMonth() < prevDate.getMonth()) {
          return subMonths(prevCurrentDate, 1); // 이전 달로 이동
        }
        return prevCurrentDate; // 달이 바뀌지 않으면 그대로 유지
      });
  
      return newDate;
    });
  };
  
  const handleSubtractDays = (days) => {
    setSelectedDate((prevDate) => {
      const newDate = subDays(prevDate, days);
  
      setCurrentDate((prevCurrentDate) => {
        if (newDate.getMonth() > prevDate.getMonth()) {
          return addMonths(prevCurrentDate, 1); // 다음 달로 이동
        } else if (newDate.getMonth() < prevDate.getMonth()) {
          return subMonths(prevCurrentDate, 1); // 이전 달로 이동
        }
        return prevCurrentDate; // 달이 바뀌지 않으면 그대로 유지
      });
      return newDate;
    });
  };
  return (
    <DateContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        currentDate,
        setCurrentDate,
        handleAddDays,
        handleSubtractDays,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

export const useDate = () => useContext(DateContext);