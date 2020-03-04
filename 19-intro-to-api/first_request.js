let request = require('request');
request('http://www.google.com', function(err, res, body) {
  console.log(res);
});
