import React, { useState } from 'react';
import {
  Button, Toast, ToastHeader, ToastBody,
} from 'reactstrap';
import moment from 'moment';
import EditEventForm from './EditEvent.jsx';

import '../../styles/event-options.css';

const EventOptions = (props) => {
  const { handleEventPatch } = props;
  
  // eslint-disable-next-line react/destructuring-assignment
  const event = props.event[0];
  const {
    title, start, user, id, practitioner, location, notes, type,
  } = event;

  // date conversion for display
  const dateFormat = moment(start, 'ddd MMM DD YYYY HH:mm:ss').format('ddd MMM Do, YYYY');

  // time conversion for display
  const timeFormat = moment(start, 'ddd MMM DD YYYY HH:mm:ss').format('hh:mm A');
  const [show, setShow] = useState(true);
  const [showEditForm, setShowEditForm] = useState(false);

  const toggle = () => {
    setShow(false);
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    const { handleEventDeletion } = props;
    handleEventDeletion(id, user);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    const { handleOpenFormAtEvent } = props;
    handleOpenFormAtEvent(start);
  };

  const handleOpenEditForm = (e) => {
    e.preventDefault();
    setShowEditForm(true);
  };

  if (showEditForm) {
    return (
      <div>
        <EditEventForm event={event} handleEventPatch={handleEventPatch} />
      </div>
    );
  }

  return (
    <div className="event-options">
      <Toast isOpen={show}>
        <ToastHeader toggle={toggle}>{title}</ToastHeader>
        <ToastBody>
          <div>{title}</div>
          <div>{dateFormat}</div>
          <div>{timeFormat}</div>
          <div>{practitioner}</div>
          <div>{location}</div>
          <div>{notes}</div>
          <div className="option-buttons-container">
            <Button onClick={handleOpenEditForm} color="dark" size="sm">edit info</Button>{' '}
            <Button onClick={handleDeleteClick} color="danger" size="sm">delete event</Button>{' '}
            <Button onClick={handleAddClick} color="primary" size="sm">add event</Button>{' '}
          </div>
        </ToastBody>
      </Toast>
    </div>
  );
};

export default EventOptions;
