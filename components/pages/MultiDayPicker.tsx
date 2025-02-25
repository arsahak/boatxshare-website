"use client";

import { format, isAfter, isBefore, isSameDay } from "date-fns";
import { useState } from "react";

interface MultiDayPickerProps {
  multiDay: { start: Date | null; end: Date | null };
  setMultiDay: React.Dispatch<
    React.SetStateAction<{ start: Date | null; end: Date | null }>
  >;
}

const MultiDayPicker: React.FC<MultiDayPickerProps> = ({
  multiDay,
  setMultiDay,
}) => {
  const [range, setRange] = useState<{ start: Date | null; end: Date | null }>(
    multiDay
  );

  const handleDateClick = (date: Date) => {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: date, end: null });
    } else if (isAfter(date, range.start)) {
      setRange({ ...range, end: date });
    } else {
      setRange({ start: date, end: null });
    }
    setMultiDay(range);
  };

  return (
    <div className="flex flex-col items-center">
      <Calendar range={range} onDateClick={handleDateClick} />
    </div>
  );
};

interface CalendarProps {
  range: { start: Date | null; end: Date | null };
  onDateClick: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ range, onDateClick }) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  );
  const totalDays = lastDayOfMonth.getDate();
  const startDay = firstDayOfMonth.getDay();

  const handleMonthChange = (offset: number) => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1)
    );
  };

  return (
    <div className="w-80 p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <button onClick={() => handleMonthChange(-1)} className="px-2 py-1">
          ◀
        </button>
        <span className="text-lg font-semibold">
          {format(currentMonth, "MMMM yyyy")}
        </span>
        <button onClick={() => handleMonthChange(1)} className="px-2 py-1">
          ▶
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-sm">
        {days.map((day) => (
          <div key={day} className="text-gray-500 text-center font-medium">
            {day}
          </div>
        ))}

        {Array(startDay)
          .fill(null)
          .map((_, index) => (
            <div key={`empty-${index}`} />
          ))}

        {Array(totalDays)
          .fill(null)
          .map((_, index) => {
            const date = new Date(
              currentMonth.getFullYear(),
              currentMonth.getMonth(),
              index + 1
            );
            const isStart = range.start && isSameDay(range.start, date);
            const isEnd = range.end && isSameDay(range.end, date);
            const inRange =
              range.start &&
              range.end &&
              isAfter(date, range.start) &&
              isBefore(date, range.end);

            return (
              <button
                key={index}
                onClick={() => onDateClick(date)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition
                ${
                  isStart || isEnd
                    ? "bg-primary text-white"
                    : inRange
                    ? "bg-blue-200 text-black"
                    : "hover:bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default MultiDayPicker;
