import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import axios from 'axios';
import { Col, Row, Container } from 'reactstrap';
import NewEvent from './NewEvent.jsx';
import EventOptions from './EventOptions.jsx';
import EditEvent from './EditEvent.jsx';
// toast imports
import PostToast from './toasts/PostToast.jsx';
import ErrorPostToast from './toasts/ErrorPostToast.jsx';
import PatchToast from './toasts/PatchToast.jsx';
import ErrorPatchToast from './toasts/ErrorPatchToast.jsx';
import RemoveToast from './toasts/RemoveToast.jsx';
import ErrorRemoveToast from './toasts/ErrorRemoveToast.jsx';
// toast import end
import { useAuth0 } from '../../react-auth0-spa.jsx';
import {
  createUserEvent,
  deleteUserEvent,
  handleIncomingData,
  handleIncomingMeds,
  patchUserEvent,
} from '../../utils/helpers';

import '../../styles/calendar.css';

const Calendar = () => {
  const { user } = useAuth0();
  //send the user.id, .email, email_verified(bool), sub, given_name, family__name to
  const [events, setEvents] = useState([]);
  const [meds, setMeds] = useState([]);
  const [loading, setLoading] = useState(true);

//   const googleCalendarAuth = function(){
//     axios({
//       method: 'post',
//       url: '/posting',
//       data: {
//         id: `${user.id}`,
//       firstName: `${user.given_name}`,
//       lastName: `${user.family_name}`,
//       email: `${user.email}`,
//       email_verified: `${user.email_verified}`,
//       sub: `${user.sub}`
//     }
//   });
// }

  useEffect(() => {
    //when calendar component loads, fetch the users events from the database and pass them
    //to the Calendar View
    async function fetchUserEvents() {
      await axios.get(`/calendar/${user.id}/events`).then(res => {
        //console.log(res);
        async function formatEvents() {
          const response = await handleIncomingData(res.data);
          return response;
        }
        formatEvents().then(formattedResponse => {
          setEvents(formattedResponse);
          setLoading(false);
        });
      });
    }
    //send a request to get the user's medical events from the database
    async function fetchMedEvents() {
      await axios.get(`/pillbox/${user.id}`)
        .then(res => {
          setMeds(res.data);
          return res.data;
        })
        .catch(err => {
          console.error(err);
        });
    };

    fetchMedEvents();
    fetchUserEvents();
    // eslint-disable-next-line
  }, []);

  const [clickedDate, setClickedDate] = useState([]);
  const [clickedEvent, setClickedEvent] = useState([
    {
      title: '',
      state: '',
      practitioner: '',
      location: '',
    },
  ]);

  const [showEventForm, setShowEventForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showEventOptions, setShowEventOptions] = useState(false);

  /* toast states */
  // success toasts
  const [showPostToast, setPostToast] = useState(false);
  const [newPostToastObj, setPostToastObj] = useState([]);
  const [showPatchToast, setPatchToast] = useState(false);
  const [newPatchToastObj, setPatchToastObj] = useState([]);
  const [showRemoveToast, setRemoveToast] = useState(false);

  // error toasts
  const [showErrorPostToast, setErrorPostToast] = useState(false);
  const [showErrorPatchToast, setErrorPatchToast] = useState(false);
  const [showErrorRemoveToast, setErrorRemoveToast] = useState(false);

  const togglePostToast = () => {
    setPostToast(false);
  };

  const toggleErrorPostToast = () => {
    setErrorPostToast(false);
  };

  const togglePatchToast = () => {
    setPatchToast(false);
  };

  const toggleErrorPatchToast = () => {
    setErrorPatchToast(false);
  };

  const toggleRemoveToast = () => {
    setRemoveToast(false);
  };

  const toggleErrorRemoveToast = () => {
    setErrorRemoveToast(false);
  };


  const toggleEventOptions = () => {
    setShowEventOptions(false);
  };

  const toggleEditForm = () => {
    setShowEditForm(false);
  }

  const handleDateClick = arg => {
    setClickedDate([arg.date]);
    setShowEventForm(true);
    if (showEventOptions) {
      setShowEventOptions(false);
    }
  };

  const handleOpenFormAtEvent = date => {
    setClickedDate(date);
    setShowEventForm(true);
    if (showEventOptions) {
      setShowEventOptions(false);
    }
  };

  const handleOpenEditForm = (event) => {
    setClickedEvent(event);
    setShowEditForm(true);
    if (showEventOptions) {
      setShowEventOptions(false);
    }
    if (showEventForm) {
      setShowEventForm(false);
    }
  };

  const eventClick = info => {
    setClickedEvent([
      {
        title: info.event.title,
        start: info.event.start.toString(),
        practitioner: info.event.extendedProps.practitioner,
        location: info.event.extendedProps.location,
        notes: info.event.extendedProps.notes,
        type: info.event.extendedProps.type,
        id: info.event.id,
      },
    ]);

    setShowEventOptions(true);
    if (showEventForm) {
      setShowEventForm(false);
    }
  };

  const handleEventPost = newEventObj => {
    //const { user } = useAuth0();
    createUserEvent(newEventObj)
      .then(() => {
        // let user know via post toast component
        setShowEventForm(false);
        setPostToastObj(newEventObj);
        setPostToast(true);
      })
      .catch(err => {
        console.error(err);
        // let user know via sad post toast component
        setShowEventForm(false);
        setErrorPostToast(true);
      });
  };

  const handleEventDeletion = (id, userId) => {
    deleteUserEvent(id, userId)
      .then((response) => {
        if (response.status === 200) {
          setShowEventOptions(false);
          setRemoveToast(true);
        } else {
          setShowEventOptions(false);
          setErrorRemoveToast(true);
        }
      });
  };

  const handleEventPatch = (editEventObj, userId, eventId) => {
    patchUserEvent(editEventObj, userId, eventId)
      .then((response) => {
        if (response.status === 200) {
        // let the user know
          setShowEditForm(false);
          setPatchToastObj(editEventObj);
          setPatchToast(true);
        } else {
          console.log(response.status);
          setShowEditForm(false);
          setErrorPatchToast(true);
        }
      });
  };

  if (loading) {
    return 'Loading...';
  }

  console.log(user, meds);

  return (
    <Container>
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
            <div>{meds.map(med =>
              <div style={{ fontSize: '150%', color: '#1B2F44'}}><b>{med.name}:</b>  {med.frequency}</div>
              )}</div>
          </div>
        </Col>
        <Col xs="5">
          {showEventForm && (
            <NewEvent
              className="calendar"
              date={clickedDate}
              handleEventPost={handleEventPost}
            />
          )}
          {showEditForm && (<EditEvent event={clickedEvent} handleEventPatch={handleEventPatch} toggle={toggleEditForm} />)}
          {showEventOptions && (
            <EventOptions
              event={clickedEvent}
              handleEventDeletion={handleEventDeletion}
              handleOpenEditForm={handleOpenEditForm}
              handleOpenFormAtEvent={handleOpenFormAtEvent}
              handleEventPatch={handleEventPatch}
              toggle={toggleEventOptions}
            />
          )}
          {showPostToast && (
            <PostToast newEvent={newPostToastObj} toggle={togglePostToast} show />
          )}
          {showErrorPostToast && (<ErrorPostToast toggle={toggleErrorPostToast} show />)}
          {showPatchToast && (
            <PatchToast newEvent={newPatchToastObj} toggle={togglePatchToast} show />
          )}
          {showErrorPatchToast && (<ErrorPatchToast toggle={toggleErrorPatchToast} show />)}
          {showRemoveToast && (
            <RemoveToast toggle={toggleRemoveToast} show />
          )}
          {showErrorRemoveToast && (<ErrorRemoveToast toggle={toggleErrorRemoveToast} show />)}
        </Col>
      </Row>
    </div>
    </Container>
  );
};

export default Calendar;
