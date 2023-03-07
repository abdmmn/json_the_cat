const request = require('request');

const URL = `https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`;

request(URL, function (error, response, body) {
  //console.error('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log(typeof body);

  //deserializing json from string to object by using "json parse":
const data = JSON.parse(body);
console.log(data);  
console.log(typeof data);
});

// this line not working >>>>>>>>>> console.log(data.weight)

//'https://api.thecatapi.com/v1/breeds/search?q=sib'