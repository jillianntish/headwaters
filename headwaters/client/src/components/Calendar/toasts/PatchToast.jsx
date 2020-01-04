import React, { useState } from 'react';
import moment from 'moment';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const PatchToast = ({ newEvent, toggle }) => {
  const event = newEvent[0];
  const { dateTime, locale, name, editNotes, prac, editType, eventId } = event;
  // convert time back to user readable format
  const date = moment(dateTime, 'YYYY-MM-DD HH:mm').format('ddd MMM Do, YYYY');
  const time = moment(dateTime, 'YYYY-MM-DD HH:mm').format('hh:mm A');

  return (
    <Toast>
      <ToastHeader toggle={toggle}>Event Modified</ToastHeader>
      <ToastBody>
        <div>{name}</div>
        <div>{date}</div>
        <div>{time}</div>
        <div>{prac}</div>
        <div>{editType}</div>
        <div>{locale}</div>
        <div>{editNotes}</div>
      </ToastBody>
    </Toast>
  )
};


export default PatchToast;