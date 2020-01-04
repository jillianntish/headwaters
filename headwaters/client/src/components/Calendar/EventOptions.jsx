import React, { useState } from 'react';
import moment from 'moment';
import {
  Button, Toast, ToastHeader, ToastBody,
} from 'reactstrap';
import { useAuth0 } from '../../react-auth0-spa.jsx';

import '../../styles/event-options.css';

const EventOptions = (props) => {
  const { user } = useAuth0();
  const { toggle } = props;
  const event = props.event[0];
  const {
    title, start, id, practitioner, location, notes, type,
  } = event;
  
  // date conversion for display
  const dateFormat = moment(start, 'ddd MMM DD YYYY HH:mm:ss').format('ddd MMM Do, YYYY');

  // time conversion for display
  const timeFormat = moment(start, 'ddd MMM DD YYYY HH:mm:ss').format('hh:mm A');

  const handleDeleteClick = (e) => {
    e.preventDefault();
    const { handleEventDeletion } = props;
    handleEventDeletion(id, user.id);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    const { handleOpenFormAtEvent } = props;
    handleOpenFormAtEvent(start);
  };

  const handleEditClick = (e) => {
    const { handleOpenEditForm } = props;
    e.preventDefault();
    handleOpenEditForm(event);
  };

  return (
    <div className="event-options">
      <Toast>
        <ToastHeader toggle={toggle}>{title}</ToastHeader>
        <ToastBody>
          <div>{title}</div>
          <div>{dateFormat}</div>
          <div>{timeFormat}</div>
          <div>{practitioner}</div>
          <div>{type}</div>
          <div>{location}</div>
          <div>{notes}</div>
          <div className="option-buttons-container">
            <Button onClick={handleEditClick} style={{ backgroundColor: '#596cb0', border: '0px' }} size="sm">edit info</Button>{' '}
            <Button onClick={handleDeleteClick} style={{ backgroundColor: '#f45d5d', border: '0px' }} size="sm">delete event</Button>{' '}
            <Button onClick={handleAddClick} style={{ backgroundColor: '#3024b0', border: '0px' }} size="sm">add event</Button>{' '}
          </div>
        </ToastBody>
      </Toast>
    </div>
  );
};

export default EventOptions;
