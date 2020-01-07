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

  useEffect(() => {
    async function getUserEntries(userId) {
      return await axios
      .get(`/journal/${userId}/entries`)
      .then(res => {
        console.log(res);
          return res.data;
        })
        .catch(err => {
          console.error(err);
        });
    }

    getUserEntries(userId);
  });

  //console.log(userId);
  return (
    <Container>
      <div className="journal-entry-form">
        <h1>Journal History</h1>
      </div>
    </Container>
  );
};

export default JournalHistory;
