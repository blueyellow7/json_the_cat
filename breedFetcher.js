const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  const domain = 'https://api.thecatapi.com/v1/breeds/search?q=';
  const URL = domain.concat(breedName);

  request(URL, (error, response, body) => {
    if (error) {
      callback(error, null)
      return;
    };
    const catObject = JSON.parse(body)

    if (catObject[0] === undefined) {
      callback(null, "This cat breed is not in 'thecatapi' database");
      return;
    };

    console.log(catObject[0].description);

  });
}

module.exports = { fetchBreedDescription };