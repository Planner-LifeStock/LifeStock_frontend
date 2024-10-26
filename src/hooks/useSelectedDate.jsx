import { useState } from "react";

export const useSelectedDate = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return {
        selectedDate,
        setSelectedDate
    };
};