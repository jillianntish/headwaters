const express = require('express');
const { getUserEvents, insertUserEvent } = require('../server/db/connection');

const calendarRouter = express.Router();

calendarRouter.get('/:userId/events', (req, res) => {
  const { userId } = req.params;

  getUserEvents(userId)
    .then(userRows => {
      if (userRows.length) {
        res.send(userRows);
      }
      res.sendStatus(204);
    })
    .catch(res.sendStatus(404));
});

calendarRouter.post('/:userId/events', (req, res) => {
  // use db helper to post a new event that matches user id
  // send back to client 201 status code
  //  501 if not completed
  const newEventObj = req.body[0];

  insertUserEvent(newEventObj)
    .then(res.sendStatus(201))
    .catch(res.sendStatus(501));
});

module.exports = calendarRouter;
