import React, { useState } from 'react';
import {
  Button, Toast, ToastHeader, ToastBody,
} from 'reactstrap';
import moment from 'moment';

import '../../styles/event-options.css';

const EventOptions = (props) => {
  const {
    title, start, user, id, practicioner, location, notes, type,
  // eslint-disable-next-line react/destructuring-assignment
  } = props.event[0];
  // date conversion for display
  const dateFormat = moment(start, 'ddd MMM DD YYYY HH:mm:ss').format('ddd MMM Do, YYYY');
  // time conversion for display
  const timeFormat = moment(start, 'ddd MMM DD YYYY HH:mm:ss').format('hh:mm A');
  const [show, setShow] = useState(true);

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

  return (
    <div className="event-options">
      <Toast isOpen={show}>
        <ToastHeader toggle={toggle}>{title}</ToastHeader>
        <ToastBody>
          <div>{title}</div>
          <div>{dateFormat}</div>
          <div>{timeFormat}</div>
          <div>{practicioner}</div>
          <div>{location}</div>
          <div>{notes}</div>
          <div className="option-buttons-container">
            <Button color="dark" size="sm">edit info</Button>{' '}
            <Button onClick={handleDeleteClick} color="danger" size="sm">delete event</Button>{' '}
            <Button onClick={handleAddClick} color="primary" size="sm">add event</Button>{' '}
          </div>
        </ToastBody>
      </Toast>
    </div>
  );
};

export default EventOptions;
