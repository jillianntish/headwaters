const express = require('express');

const router = express.Router();

router.get('/users/:userId/api/journal', (req, res) => res.send('get journal from db'));

// @Route --> POST api/pillbpx
// @Desc --> post pillbox input data to sever/db
router.post('/users/:userId/api/journal', (req, res) => res.send('send journal input to server'));

module.exports = router;

module.exports = router;
