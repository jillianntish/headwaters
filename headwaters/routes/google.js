const express = require('express');
const { saveToGoogleCal } = require('../server/api/index');

const googleRouter = express.Router();

googleRouter.post('/calendar/auth', (req, res) => {
  saveToGoogleCal()
    .then(() => {
      res.sendStatus(201);
      console.log('that event has been routed to your google calendar!')
    })
    .catch(() => {
      res.sendStatus(404);
      console.log('couldnt route that event to your google calendar!')

    });
});

module.exports = googleRouter;