const express = require('express');
const { saveToGoogleCal } = require('../client/src/utils/google');

const googleRouter = express.Router();


googleRouter.post('/posting/', (req, res) => {
  saveToGoogleCal()
    .then(() => {
      res.sendStatus(201);
      debugger;
      console.log('that event has been routed to your google calendar!')
    })
    .catch((err) => {
      res.sendStatus(404);
      debugger;
      console.log('couldnt route that event to your google calendar!', err)

    });
});



module.exports = googleRouter;