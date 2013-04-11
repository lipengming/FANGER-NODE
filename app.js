/**
express version: 3.1.1
**/

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello from Cloud Foundry');
});
app.listen(3000);