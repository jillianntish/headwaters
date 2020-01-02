const express = require('express');

const journalRouter = express.Router();

// @Route --> GET '/:userId/entries'
// @Desc --> Get a user's journals from database
journalRouter.get('/:userId/entries', (req, res) => res.send('get journal from db'));

// @Route --> POST '/:userId/entries'
// @Desc --> Post a user's journal entry to database
journalRouter.post('/:userId/entries', (req, res) => res.send('send journal input to server'));

module.exports = journalRouter;
