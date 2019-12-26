const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const path = require('path');

const { users } = require('../routes/users');

const app = express();

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Routes
app.use('/users', users);

const PORT = process.env.PORT || 8080;
const CLIENT_PATH = path.join(__dirname, '../client/dist/');

app.use(express.static(CLIENT_PATH));

app.listen(PORT, () => {
  console.log(`Listening on :${PORT} 🛸`);
});
