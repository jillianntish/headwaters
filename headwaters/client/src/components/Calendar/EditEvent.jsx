import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import moment from 'moment';
import { useAuth0 } from '../../react-auth0-spa.jsx';

import '../../styles/event-form.css';

const EditEventForm = (props) => {
  const { user } = useAuth0();
  const { event } = props;

  const {
    title, start, id, practicioner, location, notes, type,
    // eslint-disable-next-line react/destructuring-assignment
  } = event;

  // date conversion for display
  const dateFormat = moment(start, 'ddd MMM DD YYYY HH:mm:ss').format('MM-DD-YYYY');
  // time conversion for display
  const timeFormat = moment(start, 'ddd MMM DD YYYY HH:mm:ss').format('hh:mm A');

  const [userId] = useState(user.id);
  const [eventId] = useState(id);
  const [name, setName] = useState(title);
  const [prac, setPrac] = useState(practicioner);
  const [eventDate, setDate] = useState(dateFormat);
  const [time, setTime] = useState(timeFormat);
  const [editType, setType] = useState(type);
  const [editNotes, setNotes] = useState(notes);
  const [locale, setLocale] = useState(location);

  const handleEditEvent = (e) => {
    e.preventDefault();
    const { handleEventPatch } = props;

    const dateTime = `${eventDate} ${time}`;

    const editEventObj = [
      {
        userId,
        name,
        dateTime,
        editNotes,
        prac,
        editType,
        locale,
      },
    ];

    handleEventPatch(editEventObj, userId, eventId);
  };

  return (
    <div className="new-event-form">
      <Form>
        <FormGroup>
          <Label for="new-event">New Event</Label>
        </FormGroup>
        <FormGroup>
          <Label for="event-name">Event Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="practitioner">Practicioner</Label>
          <Input
            type="text"
            name="practitioner"
            id="practitioner"
            placeholder={prac}
            onChange={e => {
              setPrac(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input
            type="text"
            name="date"
            id="date"
            placeholder={eventDate}
            onChange={e => {
              setDate(e.target.value);
            }}
            onFocus={e => (e.target.type = 'date')}
            onBlur={e => (e.target.type = 'text')}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleTime">Time</Label>
          <Input
            type="time"
            name="time"
            id="time"
            defaultValue={time}
            onChange={e => {
              setTime(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="appointment">Appointment Type</Label>
          <Input
            type="select"
            name="appointment"
            id="appointment"
            placeholder={editType}
            onChange={e => {
              setType(e.target.value);
            }}
          >
            <option>mental well-being</option>
            <option>physical well-being</option>
            <option>personal</option>
            <option>other</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="notes">Notes</Label>
          <Input
            type="textarea"
            name="notes"
            id="notes"
            placeholder={editNotes}
            onChange={e => {
              setNotes(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Location</Label>
          <Input
            type="text"
            name="location"
            id="location"
            placeholder={locale}
            onChange={e => {
              setLocale(e.target.value);
            }}
          />
        </FormGroup>
      </Form>
      <Button style={{ backgroundColor: '#3024b0', border: '0px' }} onClick={handleEditEvent} size="sm">
        edit event
      </Button>{' '}
    </div>
  );
};

export default EditEventForm;