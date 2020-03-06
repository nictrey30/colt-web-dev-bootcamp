let request = require('request');
request('https://pokeapi.co/api/v2/', function(error, response, body) {
  if (error) {
    console.log(`Something went wrong ${error}`);
  } else {
    if (response.statusCode === 200) {
      // things worked
      console.log(body);
    }
  }
});
