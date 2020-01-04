import React, { useState } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const ErrorPostToast = ({ toggle }) => {

  return (
    <Toast>
      <ToastHeader color="red" toggle={toggle}>Add Event Error</ToastHeader>
      <ToastBody>
        There was an error saving your event.<br />Please try again.
      </ToastBody>
    </Toast>
  )
};


export default ErrorPostToast;
