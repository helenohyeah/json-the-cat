const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
    // parse string result into an object
    const result = JSON.parse(body);
    // if input is invalid and no desc found
    if (result.length === 0) {
      const error = `Error: No description was found for: ${breed}`;
      return callback(error);
    }
    return callback(err, result[0].description);
  });
};

module.exports = { fetchBreedDescription };