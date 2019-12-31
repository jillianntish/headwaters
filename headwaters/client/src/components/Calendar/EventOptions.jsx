import React, { useState } from 'react';
import {
  Button, Toast, ToastHeader, ToastBody,
} from 'reactstrap';
import moment from 'moment';

import '../../styles/event-options.css';

const EventOptions = ({ event }) => {

  const { title, start } = event[0];
  const [show, setShow] = useState(true);
  const toggle = () => setShow(!show);

  const dateFormat = moment(start, 'ddd MMM DD YYYY HH:mm:ss').format('ddd MMM Do, YYYY');
  console.log(dateFormat);

  const timeFormat = moment(start, 'ddd MMM DD YYYY HH:mm:ss').format('hh:mm A');
  console.log(timeFormat);

  return (
    <div className="event-options">
      <Toast isOpen={show}>
        <ToastHeader toggle={toggle}>{title}</ToastHeader>
        <ToastBody>
          <div>{title}</div>
          <div>{dateFormat}</div>
          <div>{timeFormat}</div>
          <div className="option-buttons-container">
            <Button color="dark" size="sm">edit info</Button>{' '}
            <Button color="danger" size="sm">delete event</Button>{' '}
            <Button color="primary" size="sm">add event</Button>{' '}
          </div>
        </ToastBody>
      </Toast>
    </div>
  );
};

export default EventOptions;
