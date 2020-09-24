const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
    // parse string result into an object
    const result = JSON.parse(body);
    // if input is invalid and no desc found
    if (result.length === 0) {
      console.log(`Sorry, no description was found for: ${breed}`);
      process.exit();
    }
    return callback(err, result[0].description);
  });
};

module.exports = { fetchBreedDescription };