/* eslint-disable no-param-reassign */
import React from 'react';
import moment from 'moment';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const PillboxToast = ({ newMed, toggle, isOpen }) => {
  const {
    med, practitioner, dosage, times, notes,
  } = newMed;

  const formattedTimes = times.map(time => {
    time = moment(time, 'HH:mm').format('hh:mm A');
    return time;
  });

  return (
    <Toast isOpen={isOpen}>
      <ToastHeader toggle={toggle}>Medication Entered</ToastHeader>
      <ToastBody>
        <div>{med}</div>
        <div>{practitioner}</div>
        <div>{dosage}</div>
        {formattedTimes.map(formattedTime => {
          return (<div>{formattedTime}</div>);
        })}
        <div>{notes}</div>
      </ToastBody>
    </Toast>
  );
};

export default PillboxToast;
