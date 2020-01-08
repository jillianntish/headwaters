const axios = require('axios');

const saveToGoogleCal = async(newEvent) => {
  // eslint-disable-next-line no-return-await
  return await axios.post('https://www.googleapis.com/auth/calendar', newEvent)
    .then(() => {
      const createEvent = gapi.calendar.events.insert(newEvent);
      createEvent.execute(() => {
        console.log('A new event has been added to your google calendar')
    })
  })
    .catch((err) => {
      console.error('there was an error saving to the google calendar', err);
    });
};

module.exports.saveToGoogleCal = saveToGoogleCal;