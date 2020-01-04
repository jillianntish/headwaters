import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const PillboxToast = ({ newMed, toggle, isOpen }) => {
  const {
    med, practitioner, dosage, times, notes,
  } = newMed;

  return (
    <Toast isOpen={isOpen}>
      <ToastHeader toggle={toggle}>Medication Entered</ToastHeader>
      <ToastBody>
        <div>{med}</div>
        <div>{practitioner}</div>
        <div>{dosage}</div>
        <div>{times}</div>
        <div>{notes}</div>
      </ToastBody>
    </Toast>
  );
};

export default PillboxToast;
