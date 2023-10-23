const request = require('request');
const argument = process.argv;

const catBreed = argument[2]; // retrieving command lin arg from array
const domain = 'https://api.thecatapi.com/v1/breeds/search?q=';

const URL = domain.concat(catBreed.trim());
// concatenates cat breed with domain to complete the url

request(URL, (error, response, body) => {
  if (error) {
    console.log('error: ', error);
  }

  if (body === '[]') {
    console.log("This cat breed is not in 'thecatapi' database");
    return;
  }

  const catObject = JSON.parse(body).pop(0);
  // changes string to object with JSON.parse -> then pops out object from array
  console.log(catObject['description']);
  
});
