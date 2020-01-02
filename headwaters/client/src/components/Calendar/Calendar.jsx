import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Col, Row } from 'reactstrap';
import NewEvent from './NewEvent.jsx';
import EventOptions from './EventOptions.jsx';
import { useAuth0 } from '../../react-auth0-spa.jsx';
// import { helpers } from '../../utils/helpers';

import '../../styles/calendar.css';

const Calendar = () => {
  const { user } = useAuth0();

  const [events, setEvents] = useState([
    {
      user,
      id: '',
      title: '',
      start: '',
      extendedProps: {
        practictioner: '',
        location: '',
      },
    },
  ]);

  useEffect(() => {
    // axios helper
    setEvents([
      {
        title: 'Immunization for Away Team',
        start: '2019-12-31T15:00:00',
        extendedProps: {
          practicioner: 'Dr. Crusher',
          location: 'Starship Enterprise',
        },
      },
    ]);
  }, []);

  const [clickedDate, setClickedDate] = useState([]);
  const [clickedEvent, setClickedEvent] = useState([
    {
      title: '',
      state: '',
      practicioner: '',
      location: '',
    },
  ]);

  const [showEventForm, setShowEventForm] = useState(false);
  const [showEventOptions, setShowEventOptions] = useState(false);

  // const handleTimeConversion = () => {}

  const handleDateClick = arg => {
    setClickedDate([arg.date]);
    setShowEventForm(true);
    if (showEventOptions) {
      setShowEventOptions(false);
    }
  };

  const eventClick = info => {
    setClickedEvent([
      {
        title: info.event.title,
        start: info.event.start.toString(),
        practicioner: info.event.extendedProps.practicioner,
        location: info.event.extendedProps.location,
      },
    ]);

    setShowEventOptions(true);
    if (showEventForm) {
      setShowEventForm(false);
    }
  };

  return (
    <div className="cal-font">
      <div className="calendar-top" />
      <Row>
        <Col xs="6">
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
              dateClick={handleDateClick}
              eventClick={eventClick}
            />
          </div>
        </Col>
        <Col xs="6">
          {showEventForm && (
            <NewEvent className="calendar" date={clickedDate} />
          )}
          {showEventOptions && <EventOptions event={clickedEvent} />}
        </Col>
      </Row>
    </div>
  );
};

export default Calendar;
