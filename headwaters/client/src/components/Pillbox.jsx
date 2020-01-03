/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { useAuth0 } from '../react-auth0-spa.jsx';

import '../styles/event-form.css';
import '../styles/pillbox.css';
import MedList from './MedList.jsx';

// import sample from './exampleData';
const { addUserMedication, getUserMedications } = require('../utils/helpers');

const Pillbox = () => {
  const { user } = useAuth0();

  useEffect(() => {
    getUserMedications()
      .then(res => {

        console.log("getting data from db", res.data);
      })
      .catch(err => console.error(err));
  });

  const [med, setMed] = useState([]);
  const handleMed = e => {
    e.preventDefault();
    const { value } = e.target;
    setMed(value);
  };
  const [dosage, setDosage] = useState([]);
  const handleDosage = e => {
    e.preventDefault();
    const { value } = e.target;
    setDosage(value);
  };

  const [practitioner, setPractitioner] = useState([]);
  const handlePractitioner = e => {
    e.preventDefault();
    const { value } = e.target;
    setPractitioner(value);
  };

  const [time, setTime] = useState([]);
  const handleTime = e => {
    e.preventDefault();
    const { value } = e.target;
    setTime(value);
  };

  let [times] = useState([]);
  const addTime = () => {
    // may need to change times to a string and concat string
    console.log('getting time', times);
    times = times.push(time);
  };

  const [notes, setNotes] = useState([]);
  const handleNotes = e => {
    e.preventDefault();
    const { value } = e.target;
    setNotes(value);
  };

  const [pic, setPic] = useState([]);
  const handlePic = e => {
    setPic(URL.createObjectURL(e.target.files[0]));
  };

  const [userId] = useState(user.id);
  const submitMed = e => {
    e.preventDefault();
    const medEntryObj = {
      med,
      dosage,
      practitioner,
      frequency: times.length,
      times,
      notes,
      pic,
      userId,
    };
    addUserMedication(medEntryObj);
  };

  return (
    <div>
      <div className="form-container">
        <h1>
          Pillbox <span className="text-primary" />
        </h1>
      </div>
      <div className="new-event-form">
        <form onSubmit={submitMed}>
          <FormGroup>
            <Label for="med">Medication</Label>
            <Input
              type="text"
              name="med"
              id="med"
              placeholder="medication"
              value={med}
              onChange={handleMed}
            />
          </FormGroup>
          <FormGroup>
            <Label for="dosage">Dosage (mg)</Label>
            <Input
              type="text"
              name="dosage"
              id="dosage"
              placeholder="dosage"
              value={dosage}
              onChange={handleDosage}
            />
          </FormGroup>
          <FormGroup>
            <Label for="practitioner">Practitioner</Label>
            <Input
              type="text"
              name="practitioner"
              id="practitioner"
              placeholder="practitioner"
              value={practitioner}
              onChange={handlePractitioner}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="time">Time</Label>
            <Input
              type="time"
              name="time"
              id="time"
              dateformat="HH:mm"
              placeholder="time placeholder"
              value={time}
              onChange={handleTime}
            />
            <br />
            <Button style={{ backgroundColor: '#148f86', border: '0px' }} size="sm" onClick={addTime}>
              add time
            </Button>{' '}
          </FormGroup>
          <FormGroup>
            <Label for="notes">Notes</Label>
            <Input
              type="textarea"
              name="notes"
              id="notes"
              onChange={handleNotes}
            />
          </FormGroup>
          <input type="file" name="pic" onChange={handlePic} />
          <img src={pic} height="100" width="100" alt="" />
          <br />
          <br />
          <Button style={{ backgroundColor: '#3024b0', border: '0px' }}>
            save
          </Button>{' '}
        </form>
      </div>

    </div>
  );
};
export default Pillbox;
