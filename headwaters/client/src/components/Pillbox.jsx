/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { useAuth0 } from '../react-auth0-spa.jsx';

import '../styles/event-form.css';
import '../styles/pillbox.css';
// import sample from './exampleData';
const { addUserMedication } = require('../utils/helpers');

const Pillbox = () => {
  const { user } = useAuth0();

  // componentDidMount() {
  // axios.get('/api/pillbox/:userId')
  //   .then(response){
  //   console.log(response);
  // }
  // .catch((error) => {
  //     console.log(error);
  //   };
  // }

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

  const [url, setUrl] = useState([]);
  const handleUrl = e => {
    setUrl(URL.createObjectURL(e.target.files[0]));
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
      url: url.toString(),
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
            <Button color="primary" size="sm" onClick={addTime}>
              Add Time
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
          <input type="file" name="url" onChange={handleUrl} />
          <img src={url} height="100" width="100" alt="" />
          <br />
          <br />
          <Button color="primary" size="sm">
            Submit
          </Button>{' '}
        </form>
      </div>
    </div>
  );
};
export default Pillbox;
