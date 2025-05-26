var express = require('express');
const { execFile } = require("child_process");
var app = express();
app.get('/', function (req, res) {
  res.send('Im an helpful app!');
});
app.get('/fire-portal-gun', (rq, res) => {
  execFile('/home/node/app/portalGun', (error, stdout, stderr) => {
    if (error) {
      console.error("Error: ${error}")
      return res.status(500).json({ error: error.message });
    }
    if (stderr) {
      console.warn('stderr: ${stderr}')
    }
    res.json({ output: stdout })
  });

});
app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
  
});
