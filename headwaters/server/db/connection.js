/* eslint-disable no-shadow */
const mysql = require('mysql');
// const bcrypt = require('bcrypt');
const { promisify } = require('util');

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASS = process.env.DB_PASS || '';
const DB_NAME = process.env.DB_NAME || 'waters';

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});

// user helpers

const query = promisify(connection.query).bind(connection);

const checkUsername = username => {
  // checks if a given username is found in db
  // returns a boolean
  const usernameSQL = 'select * from users where username = ?';
  return query(usernameSQL, [`${username}`])
    .then(content => {
      if (content.length) {
        return true;
      }
      return false;
    })
    .catch(err => {
      console.log(err);
    });
};

// example how to use:
// checkUsername('jeanluc')
// .then(result => {
//   console.log(result);
// })
// .catch(err => {
//     console.error(err);
// });

const checkEmail = email => {
  // checks if a given email is found in db
  // returns a boolean
  const emailSQL = 'select * from users where email = ?';
  return query(emailSQL, [`${email}`])
    .then(content => {
      if (content.length) {
        return true;
      }
      return false;
    })
    .catch(err => {
      console.log(err);
    });
};

// example how to use:
// checkEmail('captain@enterprise.space')
// .then(result => {
//   console.log(result);
// })
// .catch(err => {
//     console.error(err);
// });

const newUser = (username, email) => {
  // creates user with given input
  // protect against injection attacks
  const userValues = [`${username}`, `${email}`];
  const newUserSQL = 'insert into users(username, email) values(?, ?)';
  return query(newUserSQL, userValues);
};

// usage example
// newUser('jeanluc', 'captain@enterprise.space')
//   .then(queryOK => {
//     console.log(queryOK);
//   })
//   .catch(err => {
//     console.error(err);
//   });

const findUser = username => {
  // select user from database who matches user
  const findByUsername = 'select * from users where username = ?';
  return query(findByUsername, [`${username}`]);
};

// findUser('jeanluc')
// .then(userRows => {
//   console.log(userRows);
// })
// .catch(err => {
//   console.error(err);
// });

const findUserByEmail = email => {
  // select user from database who matches user
  const findByEmail = 'select * from users where email = ?';
  return query(findByEmail, [`${email}`]);
};

module.exports = {
  connection,
  DB_NAME,
  checkUsername,
  checkEmail,
  newUser,
  findUser,
  findUserByEmail,
};
