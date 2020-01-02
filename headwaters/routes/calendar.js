const express = require('express');
const { getUserEvents, insertUserEvent } = require('../server/db/connection');

const calendarRouter = express.Router();

calendarRouter.get('/:userId/events', (req, res) => {
  const { userId } = req.params;

  getUserEvents(userId)
    .then(userRows => {
      const userEvents = Array.from(userRows);
      res.send(userEvents);
    })
    .catch(err => {
      res.sendStatus(404);
    });
});

calendarRouter.post('/:userId/events', (req, res) => {
  const newEventObj = req.body[0];

  insertUserEvent(newEventObj)
    .then(okResponse => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(501);
    });
});

module.exports = calendarRouter;
