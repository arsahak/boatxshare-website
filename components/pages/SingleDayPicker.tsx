"use client";

import { format } from "date-fns";
import { useState } from "react";

type SingleDayPickerProps = {
  setSingleDay: (date: Date) => void;
  singleDay: Date;
};

type CalendarProps = {
  selectedDate: Date;
  onDateClick: (date: Date) => void;
};

const SingleDayPicker: React.FC<SingleDayPickerProps> = ({
  setSingleDay,
  singleDay,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(
    singleDay || new Date()
  );

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setSingleDay(date);
  };

  return (
    <div className="flex justify-center items-center">
      <Calendar selectedDate={selectedDate} onDateClick={handleDateClick} />
    </div>
  );
};

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateClick }) => {
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
    <div className="w-80 p-4 ">
      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-2">
        <button onClick={() => handleMonthChange(-1)} className="px-2 py-1 ">
          ◀
        </button>
        <span className="text-lg font-semibold">
          {format(currentMonth, "MMMM yyyy")}
        </span>
        <button onClick={() => handleMonthChange(1)} className="px-2 py-1 ">
          ▶
        </button>
      </div>

      {/* Days of the Week */}
      <div className="grid grid-cols-7 gap-1 text-sm">
        {days.map((day) => (
          <div key={day} className="text-gray-500 text-center font-medium">
            {day}
          </div>
        ))}

        {/* Empty slots for first week */}
        {Array(startDay)
          .fill(null)
          .map((_, index) => (
            <div key={`empty-${index}`} />
          ))}

        {/* Dates */}
        {Array(totalDays)
          .fill(null)
          .map((_, index) => {
            const date = new Date(
              currentMonth.getFullYear(),
              currentMonth.getMonth(),
              index + 1
            );
            const isSelected =
              selectedDate.toDateString() === date.toDateString();

            return (
              <button
                key={index}
                onClick={() => onDateClick(date)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition ${
                  isSelected ? "bg-primary text-white" : "hover:bg-gray-200"
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

export default SingleDayPicker;
