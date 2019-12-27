const express = require('express');

const router = express.Router();

const { check, validationResult } = require('express-validator');

// @Route --> POST api/users
// @Desc --> Register a user
// @Access --> Public
router.post(
  '/',
  [
    check('name', 'Name is required')
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
