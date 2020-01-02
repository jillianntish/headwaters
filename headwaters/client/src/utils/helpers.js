/* eslint-disable no-return-await */
import axios from 'axios';

export const validateEmail = async email => {
  return await axios.get('/api/auth', { params: { email } }).then(res => res.data);
};

export const createUser = async({ nickname, email }) => {
  return await axios.post('/api/auth', { nickname, email });
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
  let formattedEvents = [];
  const eventData = incomingEvents.map(incomingEvent => {
    const start = incomingEvent.date_time;
    start.replace(" ", "T");

    formattedEvents = formattedEvents.concat({
      user: incomingEvent.event_id_user,
      id: incomingEvent.id,
      title: incomingEvent.name,
      start,
      extendedProps: {
        practictioner: incomingEvent.practicioner,
        location: incomingEvent.location,
        notes: incomingEvent.notes,
        type: incomingEvent.type
      }
    });

    return formattedEvents;
  });

  return eventData;
};

export const getUserEvents = async userId => {
  await axios.get(`/calendar/${userId}/events`).then(res => {
    return handleIncomingData(res.data);
  });
};

// export const editUserEvent = async({}) => {
//  await.axios.patch(endpoint, {})
// };

// axios journal helpers

// axios pillbox helpers
