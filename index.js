const { fetchBreedDescription } = require('./breedFetcher');

const getUserInput = () => {
  return process.argv.slice(2);
};

const input = getUserInput();

fetchBreedDescription(input, (err, desc) => {
  // error case
  if (err) {
    console.log(`Error: ${err.code}`);
    process.exit();
  } else {
    console.log(`Description: ${desc}`);
  }
});