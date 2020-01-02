/* eslint-disable no-return-await */
import axios from 'axios';

export const validateEmail = async email => {
  return await axios.get('/api/auth', { params: { email } }).then(res => res.data);
};

export const createUser = async ({ nickname, email }) => {
  return await axios.post('/api/auth', { nickname, email });
};

// axios calendar helpers

export const createUserEvent = async (eventObj) => {
  return await axios.post(`/calendar/${eventObj.userId}/events`, eventObj)
    .then(res => {
      console.log(res.status);
    })
    .catch(err => {
      console.error(err);
    });
};

export const handleIncomingData = incomingEvents => {
  return incomingEvents.reduce((newEventObj, incomingEvent) => {
    const start = incomingEvent.date_time;
    start.replace(" ", "T");

    newEventObj.push({
      user: incomingEvent.event_id_user,
      id: incomingEvent.id,
      title: incomingEvent.name,
      start,
      extendedProps: {
        practictioner: incomingEvent.practicioner,
        location: incomingEvent.location,
        notes: incomingEvent.notes,
        type: incomingEvent.type
      },
    });

    return newEventObj;
  }, []);
};

// export const editUserEvent = async({}) => {
//  await.axios.patch(endpoint, {})
// };

// axios journal helpers

// axios pillbox helpers
export const addMed = async ({ med, dosage, times, notes, pic }) => {
  return await axios.post('/:userId', { med, dosage, times, notes, pic })
    .then((response) => {
      console.log("posting pillbox to server", response);
    })
    .catch((error) => {
      console.log("error posting pillbox info", error);
    });
};

export const getListofMeds = async ({ med, dosage, times, notes, pic }) => {
  return await axios.get('/:userId', { params: { med, dosage, times, notes, pic } })
    .then(res => res.data)
    .catch(err => console.log("error getting data from db for pillbox", err);
};
