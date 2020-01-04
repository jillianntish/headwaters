import React, { useState } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const ErrorRemoveToast = ({ toggle }) => {

  return (
    <Toast>
      <ToastHeader color="red" toggle={toggle}>Add Event Error</ToastHeader>
      <ToastBody>
        There was an error removing your event.<br />Please try again.
      </ToastBody>
    </Toast>
  )
};


export default ErrorRemoveToast;
