import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const JournalToast = ({ newEntry, toggle, isOpen }) => {
  const {
    text, status, h2oz, sleep, exercise, nutrition,
  } = newEntry;

  return (
    <Toast isOpen={isOpen}>
      <ToastHeader toggle={toggle}>Journal Entry Recorded</ToastHeader>
      <ToastBody>
        <div>{text}</div>
        <div>{status}</div>
        <div>{h2oz}</div>
        <div>{sleep}</div>
        <div>{exercise}</div>
        <div>{nutrition}</div>
      </ToastBody>
    </Toast>
  );
};

export default JournalToast;
