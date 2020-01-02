import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import axios from 'axios';
import { Col, Row } from 'reactstrap';
import NewEvent from './NewEvent.jsx';
import EventOptions from './EventOptions.jsx';
import { useAuth0 } from '../../react-auth0-spa.jsx';
import { createUserEvent, deleteUserEvent, handleIncomingData } from '../../utils/helpers';

import '../../styles/calendar.css';

const Calendar = () => {
  const { user } = useAuth0();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchUserEvents() {
      await axios.get(`/calendar/${user.id}/events`).then(res => {
        async function formatEvents() {
          const response = await handleIncomingData(res.data);
          return response;
        }
        formatEvents()
          .then(formattedResponse => {
            setEvents(formattedResponse);
            setLoading(false);
          });
      });
    }

    fetchUserEvents();
    // eslint-disable-next-line
  }, []);

  const [clickedDate, setClickedDate] = useState([]);
  const [clickedEvent, setClickedEvent] = useState([]);

  const [showEventForm, setShowEventForm] = useState(false);
  const [showEventOptions, setShowEventOptions] = useState(false);

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
        user: info.event.extendedProps.user,
        id: info.event.extendedProps.id,
        practicioner: info.event.extendedProps.practicioner,
        location: info.event.extendedProps.location,
        notes: info.event.extendedProps.notes,
        type: info.event.extendedProps.type,
      },
    ]);

    setShowEventOptions(true);
    if (showEventForm) {
      setShowEventForm(false);
    }
  };

  const handleEventPost = newEvent => {
    createUserEvent(newEvent)
      .then(() => {
        // let user know
      })
      .catch(err => {
        console.error(err);
        // let user know
      });
  };

  const handleEventDeletion = (id, userId) => {
    deleteUserEvent(id, userId)
      .then(() => {
        setShowEventOptions(false);
      })
      .catch(err => console.error(err));
  };

  if (loading) {
    return 'Loading...';
  }

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
            <NewEvent className="calendar" date={clickedDate} handleEventPost={handleEventPost} />
          )}
          {showEventOptions && (
          <EventOptions event={clickedEvent} handleEventDeletion={handleEventDeletion} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Calendar;
