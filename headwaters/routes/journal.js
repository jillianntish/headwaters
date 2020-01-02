const express = require('express');

const journalRouter = express.Router();

journalRouter.get('/journal/:userId/entries', (req, res) => res.send('get journal from db'));

journalRouter.post('/journal/:userId/entries', (req, res) => res.send('send journal input to server'));

module.exports = journalRouter;
