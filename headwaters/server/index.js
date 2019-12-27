const express = require('express');
const path = require('path');
const { db, DB_NAME } = require('./db/connection');

const app = express();
// Init Middleware
app.use(express.json({ extended: false }));
// app.get('/', (req, res) => res.json({ msg: 'Auth Checkpoint' }));
app.use('/api/users', require('../routes/users'));
app.use('/api/auth', require('../routes/auth'));

const PORT = process.env.PORT || 8080;
const CLIENT_PATH = path.join(__dirname, '../client/dist/');
app.use(express.static(CLIENT_PATH));
app.listen(PORT, () => {
  console.log(`Listening on :${PORT} 🛸`);
  console.log(`Connected to DB ${DB_NAME} 🐙`);
});
