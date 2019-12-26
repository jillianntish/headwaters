const express = require('express');

const users = express.Router();

// Login
users.get('/login', (req, res) => res.send('login'));

// Register
users.get('/register', (req, res) => res.send('register'));

module.exports.users = users;
