const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  const domain = 'https://api.themcatapi.com/v1/breeds/search?q=';
  const URL = domain.concat(breedName);

  request(URL, (error, response, body) => {
    if (error) {
      callback(error, null)
      return;
    };
    
    if (body === '[]') {
      callback(null, "This cat breed is not in 'thecatapi' database");
      return;
    };

    const catObject = JSON.parse(body).pop(0);
    console.log(catObject['description']);
    
  });
}

module.exports = fetchBreedDescription;