const express = require('express');

const pillboxRouter = express.Router();

// @Route --> GET api/pillbox
// @Desc --> Get pillbox from database
pillboxRouter.get('/pillbox/:userId', (req, res) => res.send('get pillbox from db'));

// @Route --> POST api/pillbpx
// @Desc --> post pillbox input data to sever/db
pillboxRouter.post('/pillbox/:userId', (req, res) => res.send('send pillbox input to server'));

module.exports = pillboxRouter;
