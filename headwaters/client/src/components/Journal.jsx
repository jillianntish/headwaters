/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';

import { useAuth0 } from '../react-auth0-spa.jsx';
import '../styles/event-form.css';

const { getUserJournalEntries, addJournalEntry } = require('../utils/helpers');

const Journal = () => {
  const { user } = useAuth0();
  const [userId] = useState(user.id);
  const [text, setJournal] = useState([]);
  const [status, setStatus] = useState('happiness');
  const [h2oz, setWater] = useState([]);
  const [sleep, setSleep] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [nutrition, setNutrition] = useState([]);

  const submitJournal = e => {
    e.preventDefault();
    const entryDate = new Date().toString();
    const date = moment(entryDate, 'ddd MMM DD YYYY HH:mm:ss').format(
      'YYYY-MM-DD HH:mm:ss',
    );
    const journalEntryObj = {
      date,
      text,
      status,
      h2oz,
      nutrition,
      sleep,
      exercise,
      userId,
    };
    addJournalEntry(journalEntryObj);
    document.getElementById('journal').reset();
    // setJournal('');
    // setStatus('happiness');
    // setWater('');
    // setSleep('');
    // setExercise('');
    // setNutrition('');
  };

  return (
    <div>
      <div className="new-event-form">
        <h3>
          Journal <span className="text-primary" />
        </h3>
        <Form id="journal">
          <FormGroup>
            <Label for="text">today&apos;s journal entry:</Label>
            <Input
              type="textarea"
              name="text"
              id="text"
              onChange={e => {
                setJournal(e.target.value);
              }}
              rows="10"
              cols="50"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="status">what are you feeling?</Label>
            <Input
              name="status"
              type="select"
              bsSize="sm"
              onChange={e => {
                setStatus(e.target.value);
              }}
            >
              <option value="happiness">happiness</option>
              <option value="anger">anger</option>
              <option value="sadness">sadness</option>
              <option value="love">love</option>
              <option value="fear">fear</option>
              <option value="depression">depression</option>
              <option value="disgust">disgust</option>
              <option value="surprise">surprise</option>
              <option value="neutral">neutral</option>
              <option value="anxiety">anxiety</option>
              <option value="contempt">contempt</option>
              <option value="pride">pride</option>
              <option value="shame">shame</option>
              <option value="envy">envy</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="h2oz">water intake in ounces:</Label>
            <Input
              type="text"
              name="h2oz"
              id="h2oz"
              placeholder="ounces"
              onChange={e => {
                setWater(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="sleep">previous night&apos;s sleep in hours:</Label>
            <Input
              type="text"
              name="sleep"
              id="sleep"
              placeholder="hours"
              onChange={e => {
                setSleep(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exercise">exercise in minutes:</Label>
            <Input
              type="text"
              name="exercise"
              id="exercise"
              placeholder="minutes"
              onChange={e => {
                setExercise(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="nutrition">nutrition notes:</Label>
            <Input
              type="textarea"
              name="nutrition"
              id="nutrition"
              onChange={e => {
                setNutrition(e.target.value);
              }}
            />
          </FormGroup>
          <Button style={{ backgroundColor: '#3024b0', border: '0px' }} onClick={submitJournal}>
          save
          </Button>{' '}
        </Form>
      </div>
    </div>
  );
};

export default Journal;
