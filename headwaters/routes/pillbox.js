const express = require('express');

const router = express.Router();

// @Route --> GET api/pillbox
// @Desc --> Get pillbox from database

router.get('/api/pillbox/:userId', (req, res) => res.send('get pillbox from db'));

// @Route --> POST api/pillbpx
// @Desc --> post pillbox input data to sever/db
router.post('/api/pillbox/:userId', (req, res) => res.send('send pillbox input to server'));

module.exports = router;
