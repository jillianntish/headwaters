import React, { useState } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const PillboxToast = ({
  name, practitioner, dosage, scheduled_times, notes, url, show,
}) => {
  const [showToast, setToast] = useState(show);
  debugger;

  const toggle = () => {
    setToast(!show);
  };
  return (
    <Toast isOpen={showToast}>
      <ToastHeader toggle={toggle}>Event Submitted</ToastHeader>
      <ToastBody>
        <div>{name}</div>
        <div>{practitioner}</div>
        <div>{dosage}</div>
        <div>{scheduled_times}</div>
        <div>{notes}</div>
        <div>{url}</div>
      </ToastBody>
    </Toast>
  );
};

export default PillboxToast;
