/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Toast,
  ToastBody,
  ToastHeader,
} from 'reactstrap';
import { useAuth0 } from '../react-auth0-spa.jsx';

import '../styles/event-form.css';
import '../styles/pillbox.css';

const { addUserMedication } = require('../utils/helpers');

const Pillbox = () => {
  const { user } = useAuth0();
  const [userId] = useState(user.id);
  const [medEntries, setMedEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUserMedications() {
      await axios
        .get(`/pillbox/${userId}`)
        .then(res => {
          setMedEntries(res.data);
        })
        .catch(err => console.error(err));
    }
    getUserMedications().then(medications => {
      const data = medications;
      setLoading(false);
    });
  }, []);

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
    setMed('');
    setDosage('');
    setPractitioner('');
    setTime('');
    setNotes('');
    setUrl('');
    setLoading(false);
    // getUserMedications();
  };

  if (loading) {
    return 'Loading...';
  }

  return (
    <div>
      <div className="form-container">
        <h1>
          Pillbox <span className="text-primary" />
        </h1>
      </div>
      <Container className="new-event-form">
        <Row>
          <Col xs="6">
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
                <Button
                  style={{ backgroundColor: '#148f86', border: '0px' }}
                  size="sm"
                  onClick={addTime}
                >
                  add time
                </Button>{' '}
              </FormGroup>
              <FormGroup>
                <Label for="notes">Notes</Label>
                <Input
                  type="textarea"
                  name="notes"
                  id="notes"
                  value={notes}
                  onChange={handleNotes}
                />
              </FormGroup>
              <input type="file" name="url" onChange={handleUrl} />
              <img src={url} height="100" width="100" alt="" />
              <br />
              <br />
              <Button style={{ backgroundColor: '#3024b0', border: '0px' }}>
                save
              </Button>{' '}
            </form>
          </Col>
          <Col sm={{ size: 'auto', offset: 1 }}>
            {medEntries.map(medEntry => (
              <div id="rcorners1">
                <li>Medication: {medEntry.name} </li>
                <li>Physician: {medEntry.practitioner} </li>
                <li>Dosage: {medEntry.dosage} </li>
                <li>Times: {medEntry.scheduled_times} </li>
                <li>Notes: {medEntry.notes} </li>
                <li>Picture:</li>
                <img src={medEntry.url} height="95" width="95" alt="" />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Pillbox;
