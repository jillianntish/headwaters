import React, { useState } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const ErrorPatchToast = ({ toggle }) => {

  return (
    <Toast>
      <ToastHeader color="red" toggle={toggle}>Add Event Error</ToastHeader>
      <ToastBody>
        There was an error editing your event.<br />Please try again.
      </ToastBody>
    </Toast>
  )
};


export default ErrorPatchToast;
