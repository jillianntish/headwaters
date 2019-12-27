import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


const Calendar = (props) => {
  return (
    <FullCalendar

        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={[{ title: 'birthday', date: '2019-12-26' }]}
      />
  );
};

export default Calendar;
