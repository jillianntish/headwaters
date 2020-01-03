import React from 'react';
import axios from 'axios';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';

import { useAuth0 } from '../react-auth0-spa.jsx';
import '../styles/event-form.css';
import '../styles/pillbox.css';
import getMeds from '../utils/helpers';
import sample from './exampleData';

const MedList = () => {
  const { user } = useAuth0();
  // class MedList extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       med: '',
  //       physician: '',
  //       dosage: '',
  //       time: '',
  //       times: [],
  //       notes: '',
  //       pic: null,
  //       // fullMedsList: {}
  //     };
  //   }


  componentDidMount() {

    // axios.get('/api/pillbox/:userId')
    //   .then(response){
    //   console.log(response);
    // }
    // .catch((error) => {
    //     console.log(error);
    //   };
  }

  const getDBMeds = () => {

  }



  return (

    <div>
      {sample.map(med =>
        <div id="rcorners1">
          <li>Medication: {med.medication} </li>
          {/* <li> Physician: {med.physician} </li> */}
          <li> Dosage: {med.dosage} </li>
          <li>Times:  {med.times} </li>
          <li>Notes:  {med.notes} </li>
          <li>Picture:</li>
          {/*  <img src={med.url} height="95" width="95" alt="" /> */}
        </div>
      )}

    </div>
  );

}

export default MedList;