import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';

import { useAuth0 } from '../react-auth0-spa.jsx';
import '../styles/event-form.css';
import '../styles/pillbox.css';
import getUserMedications from '../utils/helpers';
import sample from './exampleData';

const MedList = ({ medEntries }) => {
  const { user } = useAuth0();

  return (
    <div>
      {
        medEntries.map(medEntry => (
          <div id="rcorners1">
            <li>Medication: {medEntry.name} </li>
            <li> Physician: {medEntry.practitioner} </li>
            <li> Dosage: {medEntry.dosage} </li>
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