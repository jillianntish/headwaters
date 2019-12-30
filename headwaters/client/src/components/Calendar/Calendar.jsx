import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import NewEvent from './NewEvent.jsx';
import EventOptions from './EventOptions.jsx';

import '../../styles/calendar.css';
import '../../styles/vex.css';
import '../../styles/vex-theme.css';

import vex from 'vex-js';

vex.registerPlugin(require('vex-dialog'));

vex.defaultOptions.className = 'vex-theme-os';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        { title: 'coffee', start: '2019-12-28T14:30:00' },
        { title: 'camping', start: '2019-12-29', end: '2020-01-01' },
        { title: 'birthday', date: '2020-01-02' },
        { title: 'sleepover', date: '2020-01-02' },
        { title: 'therapy', date: '2020-01-01T15:00:00', color: 'red' },
      ],
      showNewEvent: false,
      showEventOptions: false,
    };
    this.handleDateClick = this.handleDateClick.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.handleEventClick = this.handleEventClick.bind(this);
  }


  handleDateClick(arg) {
    const { handleAddEvent } = this;
    vex.dialog.confirm({
      message: 'Are you absolutely sure you want to destroy the alien planet?',
      callback(value) {
        if (value) {
          handleAddEvent(arg);
        } else {
          console.log('Chicken');
        }
      },
    });
  }

  handleAddEvent(arg) {
    const { events } = this.state;
    this.setState({
      // add new event data
      events: events.concat({
        // creates a new array
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay,
      }),
    }, () => {
      console.log('Successfully destroyed the planet', arg.date);
    });
  }

  handleEventClick(arg) {
    // show event
    const { showEventOptions } = this.state;
    // option to edit event
    this.setState({
      showEventOptions: !showEventOptions,
    });
  }

  render() {
    const { events, showNewEvent, showEventOptions } = this.state;
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
            selectable
            events={events}
            dateClick={this.handleDateClick}
            eventClick={this.handleEventClick}
          />
        </div>
        {showNewEvent ? <NewEvent /> : <div />}
        {showEventOptions ? <EventOptions /> : <div />}
      </div>
    );
  }
}

export default Calendar;
