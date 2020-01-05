const express = require('express');
const https = require('https');
const path = require('path');
const { DB_NAME } = require('./db/connection');
const { checkEmail, newUser, findUserByEmail } = require('./db/connection');
const calendarRouter = require('../routes/calendar');
const journalRouter = require('../routes/journal');
const pillboxRouter = require('../routes/pillbox');

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

app.use('/calendar', calendarRouter);
app.use('/journal', journalRouter);
app.use('/pillbox', pillboxRouter);

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

const PORT = process.env.PORT || 8443;
const CLIENT_PATH = path.join(__dirname, '../client/dist/');
// const credentials = { key: privateKey, cert: certificate };
const privateKey = '0000';
const certificate = '0000';

const credentials = { key: privateKey, cert: certificate };
app.use(express.static(CLIENT_PATH));

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(8443);

app.listen(PORT, () => {
  console.log(`Listening on :${PORT} 🛸`);
  console.log(`Connected to DB ${DB_NAME} 🐙`);
});
