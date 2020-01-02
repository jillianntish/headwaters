const express = require('express');
const { getUserEvents, insertUserEvent, deleteUserEvent } = require('../server/db/connection');

const calendarRouter = express.Router();

calendarRouter.get('/:userId/events', (req, res) => {
  const { userId } = req.params;

  getUserEvents(userId)
    .then(userRows => {
      res.send(userRows);
    })
    .catch(() => {
      res.sendStatus(404);
    });
});

calendarRouter.post('/:userId/events', (req, res) => {
  const newEventObj = req.body[0];

  insertUserEvent(newEventObj)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(501);
    });
});

calendarRouter.delete('/:userId/events/:eventId', (req, res) => {
  const { userId, eventId } = req.params;

  deleteUserEvent(userId, eventId)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(404);
    });
});

module.exports = calendarRouter;
