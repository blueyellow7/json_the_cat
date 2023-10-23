const { fetchBreedDescription } = require('./breedFetcher.js');
const argument = process.argv;
const breedName = argument[2];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
    return;
  }
  console.log(description);
});