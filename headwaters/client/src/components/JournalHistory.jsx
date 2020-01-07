/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import {
  Button, Container, Col, Row, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { useAuth0 } from '../react-auth0-spa.jsx';
import JournalToast from './toasts/JournalToast.jsx';
import '../styles/event-form.css';

const JournalHistory = () => {
  const { user } = useAuth0();
  const [userId] = useState(user.id);
  const [journals, setJournals] = useState([])

  useEffect(() => {
    async function getUserEntries(userId) {
      return await axios
      .get(`/journal/${userId}/entries`)
      .then(res => {
        setJournals(res.data);
        return res.data;
      })
      .catch(err => {
        console.error(err);
      });
    }
    getUserEntries(userId);
  }, []);
  
  
  return (
    <Container>
      <div className="journal-entry-form">
        <h1>Journal History</h1>
        <div>
          {journals.map(journal =>
            <div style={{ borderStyle: 'solid', padding: 10, margin: 10 }}>
              <div>Date: {moment(journal.date).format('MMMM Do YYYY')}</div>
              <div>Journal Entry: {journal.text} </div>
              <div>Feeling: {journal.status} </div>
              <div>sleep: {journal.sleep} hours</div>
              <div>Water Intake: {journal.hzoz}oz</div>
              <div>Exercize: {journal.exercise} min</div>
              <div>Nutrition Notes: {journal.nutrition}</div>
            </div>
          )}
        </div>
      </div>
      <br />
      <Button>Show More</Button>
    </Container>
  );
};

export default JournalHistory;
