var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Im an helpful app!');
});
app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
});
