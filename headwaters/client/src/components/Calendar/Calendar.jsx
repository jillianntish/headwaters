import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import vex from 'vex-js';
import NewEvent from './NewEvent.jsx';
import EventOptions from './EventOptions.jsx';

import '../../styles/calendar.css';
import '../../styles/vex.css';
import '../../styles/vex-theme.css';


vex.registerPlugin(require('vex-dialog'));

vex.defaultOptions.className = 'vex-theme-os';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    const {
      // eslint-disable-next-line no-unused-vars
      isAuthenticated, loginWithRedirect, logout, user,
    } = useAuth0();


    this.state = {
      user,
      events: [
        {
          title: 'coffee', start: '2019-12-28T14:30:00', end: '2020-01-01T15:00:00', extendedProps: { practictioner: 'doctor', color: 'yellow', location: 'office12'},
        },
      ],
      event: [],
      date: [],
      showNewEvent: false,
      showEventOptions: false,
    };
    this.handleDateClick = this.handleDateClick.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.eventClick = this.eventClick.bind(this);
  }


  handleDateClick(arg) {
    const { showNewEvent, showEventOptions } = this.state;
    this.setState({
      date: [arg.date],
      showNewEvent: !showNewEvent,
    }, () => {
      if (showEventOptions) {
        this.setState({
          showEventOptions: false,
        });
      }
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

  eventClick(info) {
    // show event
    const { showEventOptions, showNewEvent } = this.state;
    // option to edit event
    this.setState({
      event: [{
        title: info.event.title,
        start: info.event.start.toString(),
        end: info.event.end.toString(),
        practictioner: info.event.extendedProps.practictioner,
        location: info.event.extendedProps.location,
      }],
      showEventOptions: !showEventOptions,
    }, () => {
      if (showNewEvent) {
        this.setState({
          showNewEvent: false,
        });
      }
    });
  }

  render() {
    const {
      events, event, date, showNewEvent, showEventOptions,
    } = this.state;
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
            eventClick={this.eventClick}
          />
        </div>
        {showNewEvent ? <NewEvent date={date} /> : <div />}
        {showEventOptions ? <EventOptions event={event} /> : <div />}
      </div>
    );
  }
}

export default Calendar;
