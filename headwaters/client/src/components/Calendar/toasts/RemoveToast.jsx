import React, { useState } from 'react';
import moment from 'moment';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const RemoveToast = ({  toggle }) => {

  return (
    <Toast>
      <ToastHeader toggle={toggle}>Event Removed</ToastHeader>
      <ToastBody>
      Your event was deleted. Have a nice day.
      </ToastBody>
    </Toast>
  )
};


export default RemoveToast;