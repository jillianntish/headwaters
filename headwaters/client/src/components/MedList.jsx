import React from 'react';
import '../styles/event-form.css';
import '../styles/pillbox.css';

const MedList = ({ medEntries }) => {
  return (
    <div>
      {
        medEntries.map(medEntry => (
          <div id="rcorners1">
            <li>Medication: {medEntry.name} </li>
            <li>Physician: {medEntry.practitioner} </li>
            <li>Dosage: {medEntry.dosage} </li>
            <li>Times: {medEntry.scheduled_times} </li>
            <li>Notes: {medEntry.notes} </li>
            <li>Picture:</li>
            <img src={medEntry.url} height="95" width="95" alt="" />
          </div>
        ))
      }
    </div>
  );
};

export default MedList;
