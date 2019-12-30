const express = require('express');
const { check, validationResult } = require('express-validator');
const {
  checkUsername, checkEmail, newUser, findUser,
} = require('../server/db/connection');

const router = express.Router();


// @Route --> POST api/users
// @Desc --> Register a user
// @Access --> Public
router.post(
  '/',
  [
    check('firtName', 'First name is required')
      .not()
      .isEmpty(),
    check('lastName', 'Last name is required')
      .not()
      .isEmpty(),
    check('username', 'Username is required')
      .not()
      .isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be at least 8 characters').isLength({
      min: 8,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    // try {
    // let user = await ????
    // } catch (err) {

    // }
  },
);

module.exports = router;
