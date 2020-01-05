import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import '../styles/event-form.css';
import '../styles/pillbox.css';

const MedList = ({ medEntries }) => {
  return (
    <div>
      {medEntries.map((medEntry) => (
        <Toast>
          <ToastHeader>Rx</ToastHeader>
          <ToastBody className="box">
            <div>Medication: {medEntry.name}</div>
            <div>Practitioner: {medEntry.practitioner}</div>
            <div>Dosage: {medEntry.dosage}mg</div>
            <div>Daily Times: {medEntry.scheduled_times} </div>
            <div>Notes: {medEntry.notes} </div>
            <img
              src={medEntry.url}
              height="95"
              width="95"
              alt=""
            />
          </ToastBody>
        </Toast>
      ))}
    </div>
  );
};

export default MedList;
