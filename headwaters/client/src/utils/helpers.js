/* eslint-disable no-return-await */
import axios from 'axios';


/**
 * Axios authentication helpers
 */

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

/**
 * Axios calendar helpers
 */

export const createUserEvent = async(eventObj) => {
  return await axios.post(`/calendar/${eventObj.userId}/events`, eventObj)
    .then(res => {
      console.log(res.status);
    })
    .catch(err => {
      console.error(err);
    });
};

export const chooseEventColor = type => {
  let color;
  switch (type) {
    case 'physical well-being':
      color = '#148f86';
      break;
    case 'mental well-being':
      color = '#596cb0';
      break;
    case 'medication':
      color = '5b1236';
      break;
    case 'personal':
      color = '#f64545';
      break;
    case 'other':
      color = '#edbe2c';
      break;
    case 'journal entry':
      color = '#d8afef';
      break;
    default:
      color = '#596cb0';
  }
  return color;
};

export const handleIncomingData = incomingEvents => {
  return incomingEvents.reduce((newEventObj, incomingEvent) => {
    const start = incomingEvent.date_time;
    start.replace(' ', 'T');

    newEventObj.push({
      title: incomingEvent.name,
      start,
      color: chooseEventColor(incomingEvent.type),
      extendedProps: {
        user: incomingEvent.event_id_user,
        id: incomingEvent.id,
        practicioner: incomingEvent.practicioner,
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

export const deleteUserEvent = async(eventId, userId) => {
  return await axios.delete(`/calendar/${userId}/events/${eventId}`)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.error(err);
    });
};

export const patchUserEvent = async(editEventObj, userId, eventId) => {
  return await axios.patch(`/calendar/${userId}/events/${eventId}`, editEventObj)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.error(err);
    });
};

/**
 * Axios journal helpers
 */

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


/**
 * Axios pillbox helpers
 */

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
