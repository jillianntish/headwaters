const axios = require('axios');
const googleAPI = require('./api/googleCalAPI');
const { handleClientLoad } = require('./api/googleCalAPI');
const gapi = require('googleapis')
// const saveToGoogleCal = async(newEvent) => {
//   // eslint-disable-next-line no-return-await
//   console.log('axxxxxed it')
//   console.log(newEvent);
//   return await axios.post(`https://www.googleapis.com/calender/v3/calendars/${newEvent.id}/events`, newEvent)
//     .then(() => {
//       const createEvent = gapi.calendar.events.insert(newEvent);
//       console.log(createEvent);
//       createEvent.execute(() => {
//         console.log('Axios has posted that new event has beento your google calendar')
//     })
//   })
//     .catch((err) => {
//       console.error('Axios had trouble saving your event to the google calendar', err);
//     });
// };

//module.exports.saveToGoogleCal = saveToGoogleCal;