import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from "@fullcalendar/timegrid";

import '../styles/calendar.css';

const Calendar = (props) => {
  return (
    <div className="cal-font">
      <div className="calendar-top" />
      <div className="calendar">
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          header={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth, timeGridWeek, timeGridDay, listWeek"
          }}
          events={[
            { title: "event 1", date: "2019-12-27" },
            { title: "event 2", date: "2019-12-28" }
          ]}
        />
      </div>
    </div>
  );
};

export default Calendar;
