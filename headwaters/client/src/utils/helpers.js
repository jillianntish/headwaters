/* eslint-disable no-return-await */
import axios from 'axios';

export const validateEmail = async email => {
  return await axios.get('/api/auth', { params: { email } }).then(res => res.data);
};

export const createUser = async({ nickname, email }) => {
  return await axios.post('/api/auth', { nickname, email });
};
