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
            <div><b>Medication:</b> {medEntry.name}</div>
            <br />
            <div><b>Practitioner:</b> {medEntry.practitioner}</div>
            <br />
            <div><b>Dosage:</b> {medEntry.dosage}mg</div>
            <br />
            <div><b>Daily Times:</b> {medEntry.scheduled_times}</div>
            <br />
            <div><b>Notes:</b> {medEntry.notes}</div>
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
