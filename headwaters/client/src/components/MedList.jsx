import React from 'react';
import '../styles/event-form.css';
import '../styles/pillbox.css';

const MedList = ({ medEntries }) => {
  return (
    <div>
      {
        medEntries.map((medEntry, index) => (
          <div key={index} className="box">
            <img src={medEntry.url} height="95" width="95" alt="" />
            <div>{medEntry.name}</div>
            <div>{medEntry.practitioner}</div>
            <div>{medEntry.dosage}mg</div>
            <div>{medEntry.scheduled_times} </div>
            <div>{medEntry.notes} </div>
          </div>
        ))
      }
    </div>
  );
};

export default MedList;
