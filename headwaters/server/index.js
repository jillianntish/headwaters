const express = require('express');
const path = require('path');
const { DB_NAME } = require('./db/connection');
const { checkEmail, newUser, findUserByEmail } = require('./db/connection');

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

app.use('/api/users', require('../routes/users'));
// app.use('/api/auth', require('../routes/auth'));

app.get('/api/auth', async(req, res) => {
  const payload = req.query;
  const validEmail = await checkEmail(payload.email);
  if (!validEmail) {
    res.json(false);
  } else {
    const foundUsers = await findUserByEmail(payload.email);
    res.json(foundUsers[0]);
  }
});

app.post('/api/auth', async(req, res) => {
  const payload = req.body;
  await newUser(payload.nickname, payload.email);
  const foundUsers = await findUserByEmail(payload.email);
  res.json(foundUsers[0]);
});

const PORT = process.env.PORT || 8080;
const CLIENT_PATH = path.join(__dirname, '../client/dist/');

app.use(express.static(CLIENT_PATH));

app.listen(PORT, () => {
  console.log(`Listening on :${PORT} 🛸`);
  console.log(`Connected to DB ${DB_NAME} 🐙`);
});
