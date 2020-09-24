const request = require('request');

const getUserInput = () => {
  return process.argv.slice(2);
};

const requestDesc = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
    // error case
    if (err) {
      console.log(`ERROR: ${err.code}`);
      process.exit();
    }
    // parse string result into an object
    const result = JSON.parse(body);
    // if input is invalid and no desc found
    if (result.length === 0) {
      console.log(`Sorry, no description was found for: ${breed}`);
      process.exit();
    }
    return callback(result[0].description);
  });
};

const input = getUserInput();
requestDesc(input, (desc) => {
  console.log(desc);
});