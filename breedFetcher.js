const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=sib', (err, response, body) => {
  console.log('err:', err);
  // console.log('response:', response);
  // console.log('body:', body);
  const obj = JSON.parse(body);
  console.log('desc:', obj[0].description);
});