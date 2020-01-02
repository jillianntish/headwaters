/* eslint-disable no-return-await */
import axios from 'axios';

export const validateEmail = async(email) => {
  return await axios.get('/api/auth', {
    params: {
      email,
    },
  }).then(res => res.data);
};

export const createUser = async({
  nickname,
  email,
}) => {
  return await axios.post('/api/auth', {
    nickname,
    email,
  });
};

// axios calendar helpers

export const createUserEvent = async(eventObj) => {
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
    start.replace(' ', 'T');

    newEventObj.push({
      user: incomingEvent.event_id_user,
      id: incomingEvent.id,
      title: incomingEvent.name,
      start,
      extendedProps: {
        practictioner: incomingEvent.practicioner,
        location: incomingEvent.location,
        notes: incomingEvent.notes,
        type: incomingEvent.type,
      },
    });

    return newEventObj;
  }, []);
};

// export const editUserEvent = async({}) => {
//  await.axios.patch(endpoint, {})
// };

// axios journal helpers
export const getUserEntries = async(userId) => {
  return await axios.get(`/journal/${userId}/entries`)
    .then(res => {
      res.data;
      debugger;
    })
    .catch(err => {
      console.error(err);
      debugger;
    });
};

export const addJournalEntry = async(newEntryObj) => {
  return await axios.post(`/journal/${newEntryObj.userId}/entries`, newEntryObj)
    .then((response) => {
      response;
      debugger;
    })
    .catch(err => console.error(err));
};


// axios pillbox helpers
export const getUserMedications = async(userId) => {
  return await axios.get(`/pillbox/${userId}`)
    .then(res => {
      res.data;
      debugger;
    })
    .catch(err => console.error(err));
};

export const addUserMedication = async(newMedObj) => {
  return await axios.post(`/pillbox/${newMedObj.userId}`, newMedObj)
    .then((response) => {
      response;
      debugger;
    })
    .catch(err => console.error(err));
};
