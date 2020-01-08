/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useAuth0 } from '../react-auth0-spa.jsx';
import { Container } from 'reactstrap';
import '../styles/event-form.css';
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
} from '@merc/react-timeline';
// import Chronology from 'react-chronos';

const MedTracker = () => {
  const { user } = useAuth0();
  const [userId] = useState(user.id);
  //need the prescription and the pillhistory
  const [prescription, setPrescription] = useState([]);
  const [pillHistory, setPillHistory] = useState([]);

  //settings for the timeline
  const opts = {
    layout: "inline-evts"
  };
  useEffect(() => {
    //! how to format date
    // const entryDate = new Date().toString();
    // const date = moment(
    //   entryDate,
    //   'ddd MMM DD YYYY HH:mm:ss',
    // ).format('YYYY-MM-DD HH:mm:ss');
    //! possible frequencies "1x daily", "2x daily", "3x daily", "1x weekly"
    //todo delete after endpoint is build
    const dummyData = {
      prescriptions: [
        {
          //user meds table
          medName: "xanax",
          dosage: 2,
          frequency: "1x daily",
          scheduled_times: "often",
          practicioner: "bobby",
          notes: "lala",
        }
      ],
      pillHistory: [
        {
          medName : "xanax",
          date: new Date(),
          frequency_taken: 1,
        }
      ],
    }
    setPrescription(dummyData.prescriptions);
    setPillHistory(dummyData.pillHistory);
    //todo delete after endpoint is build



    //todo uncomment after endpoint is built
    // //here i will ping server for needed data.
    // //save that data to state
    // async function getPrescriptionAndPillHist(userId) {
    //   return await axios
    //   //make this get go to the endpoint ryan builds
    //     .get(`/journal/${userId}/entries`)
    //     .then(res => {
    //       //update state
    //       setPrescription(res.data);
    //       setPillHistory(res.data);
    //       return res.data;
    //     })
    //     .catch(err => {
    //       console.error(err);
    //     });
    // }
    // getPrescriptionAndPillHist(userId);
    //todo uncomment after endpoint is built
  }, []);
  return (
    <Container>
      <div className="med-tracker">
        <h1 style={{ color: '#1B2F44', fontWeight: 'bolder', paddingLeft: '5px', paddingTop: '10px' }}>Medicine Tracker</h1>
        <h1>Paul Town</h1>
        <Timeline opts={opts}>
          <Events>
            <TextEvent date="1/1/19" text={prescription[0] ? prescription[0].medName: "yo no data yet"} />
            <TextEvent date="1/1/14" text="**Markdown** is *supported*" />
            <TextEvent date="1/1/12" text="**Markdown** is *supported*" />

          </Events>
        </Timeline>
      </div>
    </Container>
  );
};

export default MedTracker;