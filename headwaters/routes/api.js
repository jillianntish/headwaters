const express = require('express');
const { retrieveQuotes } = require('../server/api/index');

const apiRouter = express.Router();

apiRouter.get('/quotes', (req, res) => {
  retrieveQuotes()
    .then(quotes => {
      res.send(quotes);
    })
    .catch(() => {
      res.sendStatus(404);
    });
});

module.exports = apiRouter;
