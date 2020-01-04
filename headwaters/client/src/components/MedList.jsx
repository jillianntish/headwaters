import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import '../styles/event-form.css';
import '../styles/pillbox.css';

const MedList = ({ medEntries }) => {
  return (
    <div>
      {medEntries.map((medEntry, index) => (
        <Toast>
          <ToastHeader>Rx</ToastHeader>
          <ToastBody key={index} className="box">
            <img src={medEntry.url} height="95" width="95" alt="" />
            <div>{medEntry.name}</div>
            <div>{medEntry.practitioner}</div>
            <div>{medEntry.dosage}mg</div>
            <div>{medEntry.scheduled_times} </div>
            <div>{medEntry.notes} </div>
          </ToastBody>
        </Toast>
      ))}
    </div>
  );
};

export default MedList;
