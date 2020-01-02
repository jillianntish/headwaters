const express = require('express');

const journalRouter = express.Router();

journalRouter.get('/journal/:userId/entries', (req, res) => res.send('get journal from db'));

// @Route --> POST api/pillbpx
// @Desc --> post pillbox input data to sever/db
journalRouter.post('/journal/:userId/entries', (req, res) => res.send('send journal input to server'));

module.exports = journalRouter;
