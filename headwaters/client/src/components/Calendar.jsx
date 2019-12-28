import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

import '../styles/calendar.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        { title: "coffee", start: "2019-12-28T14:30:00" },
        { title: "camping", start: "2019-12-29", end: "2020-01-01" },
        { title: "birthday", date: "2020-01-02" },
        { title: "sleepover", date: "2020-01-02" },
        { title: "therapy", date: "2020-01-01T15:00:00", color: 'red'}
        
      ],
    };
  }

  render() {
    return (
      <div className="cal-font">
        <div className="calendar-top" />
        <div className="calendar">
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          header={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth, timeGridWeek, timeGridDay, listWeek',
          }}
          events={this.state.events}
        />
      </div>
      </div>
    );
  }
}

export default Calendar;
