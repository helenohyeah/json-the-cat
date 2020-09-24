const request = require('request');

const getUserInput = () => {
  return process.argv.slice(2);
}

const requestDesc = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
  const obj = JSON.parse(body);
  return callback(obj[0].description);
  });
}

const input = getUserInput();
const printDesc  = requestDesc(input, (desc) => {
  console.log(desc);
});