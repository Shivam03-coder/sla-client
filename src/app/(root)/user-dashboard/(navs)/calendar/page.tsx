"use client";
import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale/en-US";

// Set up date-fns localizer
const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

// Dummy data for calendar events
const events = [
  {
    title: "Team Meeting",
    start: new Date(2024, 8, 23, 10, 0), // Year, Month (0-indexed), Day, Hour, Minute
    end: new Date(2024, 8, 23, 11, 0),
  },
  {
    title: "Project Deadline",
    start: new Date(2024, 8, 25),
    end: new Date(2024, 8, 25),
  },
  {
    title: "Client Presentation",
    start: new Date(2024, 8, 28, 14, 0),
    end: new Date(2024, 8, 28, 15, 30),
  },
  {
    title: "Workshop",
    start: new Date(2024, 9, 2, 9, 0),
    end: new Date(2024, 9, 2, 12, 0),
  },
];

const CalendarComponent = () => {
  return (
    <div className="p-10">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={["month"]}
        toolbar
        className="min-h-screen rounded-xl"
        max={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
      />
    </div>
  );
};

export default CalendarComponent;
