import React, { useState } from 'react';
import {
  Button, Toast, ToastHeader, ToastBody,
} from 'reactstrap';
import moment from 'moment';

import '../../styles/event-options.css';

class EventOptions extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    const {
      title, start, practicioner, location,
    } = props.event[0];
    this.state = {
      title,
      start,
      practicioner,
      location,
      show: true,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { show } = this.state;
    this.setState({
      show: !show,
    });
  }


  render() {
    const {
      title, start, practicioner, location, show,
    } = this.state;
    // date conversion
    const dateFormat = moment(start, 'ddd MMM DD YYYY HH:mm:ss').format('ddd MMM Do, YYYY');
    console.log(dateFormat);
    // time conversion
    const timeFormat = moment(start, 'ddd MMM DD YYYY HH:mm:ss').format('hh:mm A');
    console.log(timeFormat);

    return (
      <div className="event-options">
        <Toast isOpen={show}>
          <ToastHeader toggle={this.toggle}>{title}</ToastHeader>
          <ToastBody>
            <div>{title}</div>
            <div>{dateFormat}</div>
            <div>{timeFormat}</div>
            <div>{practicioner}</div>
            <div>{location}</div>
            <div className="option-buttons-container">
              <Button color="dark" size="sm">edit info</Button>{' '}
              <Button color="danger" size="sm">delete event</Button>{' '}
              <Button color="primary" size="sm">add event</Button>{' '}
            </div>
          </ToastBody>
        </Toast>
      </div>
    );
  }
}

export default EventOptions;
