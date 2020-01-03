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

const MedList = (med) => {
  const { user } = useAuth0();

  return (
    <div>
      {sample.map(med =>
        <div id="rcorners1">
          <li>Medication: {med.medication} </li>
          <li> Physician: {med.physician} </li>
          <li> Dosage: {med.dosage} </li>
          <li>Times:  {med.times} </li>
          <li>Notes:  {med.notes} </li>
          <li>Picture:</li>
          <img src={med.url} height="95" width="95" alt="" />
        </div>
      )}
    </div>
  );
};

export default MedList;
