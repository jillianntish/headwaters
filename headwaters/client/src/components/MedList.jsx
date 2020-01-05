/* eslint-disable no-param-reassign */
import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import moment from 'moment';
import '../styles/event-form.css';
import '../styles/pillbox.css';

const MedList = ({ medEntries }) => {
  // const formattedTimes = [];

  return (
    <div>
      {medEntries.map((medEntry) => (
        //       medEntry.scheduled_times.map(time => {
        //   time = moment(time, 'HH:mm').format('hh:mm A');
        //   return time;
        // })

        // const time = moment(times, 'HH:mm').format('hh:mm A');
        <Toast>
          <ToastHeader>Rx</ToastHeader>
          <ToastBody className="box">
            <div><b>Medication:</b> {medEntry.name}</div>
            <br />
            <div><b>Practitioner:</b> {medEntry.practitioner}</div>
            <br />
            <div><b>Dosage:</b> {medEntry.dosage}mg</div>
            <br />
            <div><b>Daily Times:</b>{medEntry.scheduled_times.split(',').map(time => {
              time = moment(time, 'HH:mm').format('hh:mm A');
              return ` - ${time}`;
            })}
            </div>
            <br />
            <div><b>Notes:</b> {medEntry.notes}</div>
            <div><b>Image:</b>
              <img
                src={medEntry.url}
                height="95"
                width="95"
                alt=""
              />
            </div>
          </ToastBody>
        </Toast>
      ))}
    </div>
  );
};

export default MedList;
