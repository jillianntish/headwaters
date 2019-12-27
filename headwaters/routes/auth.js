const express = require('express');

const router = express.Router();

// @Route --> GET api/auth
// @Desc --> Get logged in user
// @Access --> Private
router.get('/', (req, res) => res.send('get logged in user'));

// @Route --> GET api/auth
// @Desc --> Auth user & get token
// @Access --> Public
router.post('/', (req, res) => res.send('log in a user'));

module.exports = router;
