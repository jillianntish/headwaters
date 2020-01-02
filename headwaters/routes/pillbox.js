const express = require('express');

const pillboxRouter = express.Router();

// @Route --> GET '/:userId'
// @Desc --> Get a user's pillbox from database
pillboxRouter.get('/:userId', (req, res) => res.send('get pillbox from db'));

// @Route --> POST '/:userId'
// @Desc --> post user's pillbox input data to database
pillboxRouter.post('/:userId', (req, res) => res.send('send pillbox input to server'));

module.exports = pillboxRouter;
