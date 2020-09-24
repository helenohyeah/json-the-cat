const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {

  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      // NOTE: API response at https://api.thecatapi.com/v1/breeds/search?q=siberian showed an extra space at the end of the description
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      // compare returned description
      assert.equal(expectedDesc, desc);
      done();
    });
  });

  it('returns an error for an invalid breed, via callback', (done) => {
    fetchBreedDescription('Whatsacat', (err, desc) => {
      const expectedErr = `Error: No description was found for: Whatsacat`;
      // we expect an error for this scenario
      assert.equal(err, expectedErr);

      // we expect desc to be null
      assert.equal(desc, null);
      done();
    });
  });
});
