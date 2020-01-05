const axios = require('axios');

const retrieveQuotes = async() => {
  // eslint-disable-next-line no-return-await
  return await axios.get('https://api.quotable.io/quotes?author=thich nhat hanh')
    .then(response => {
      const { results } = response.data;
      return results;
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports.retrieveQuotes = retrieveQuotes;
