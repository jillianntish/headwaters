const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');

// @Route --> GET api/pillbox
// @Desc --> Get pillbox from database

router.get('/api/pillbox/1', (req, res) => {
  //helper function to get data(medication info) from db to post to user
  // getMeds()
  // .then(response => {
  //   res.send('get pillbox from db', response);
  // })
  // .catch(error => {
  //   console.log("uh oh,couldn't get data from db");
  // })
});
// @Route --> POST api/pillbpx
// @Desc --> post pillbox input data to sever/db
router.post('/api/pillbox/:userId', (req, res) => {
  console.log("getting data from client", req.body);
  //helper function to save data to db
  res.send('send pillbox input to server');
}
module.exports = router;
