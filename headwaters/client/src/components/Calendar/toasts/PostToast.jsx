import React, { useState } from 'react';
import moment from 'moment';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const PostToast = ({ newEvent, toggle }) => {
  const event = newEvent[0];

  const { dateTime, locale, name, notes, prac, type } = event;
  // convert time back to user readable format
  const date = moment(dateTime, 'YYYY-MM-DD HH:mm').format('ddd MMM Do, YYYY');
  const time = moment(dateTime, 'YYYY-MM-DD HH:mm').format('hh:mm A');

  return (
    <Toast>
      <ToastHeader toggle={toggle}>Event Submitted</ToastHeader>
      <ToastBody>
        <div>{name}</div>
        <div>{date}</div>
        <div>{time}</div>
        <div>{prac}</div>
        <div>{type}</div>
        <div>{locale}</div>
        <div>{notes}</div>
      </ToastBody>
    </Toast>
  )
};


export default PostToast;
