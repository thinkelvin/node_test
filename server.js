var express = require('express');
var app = express();
var server = app.listen();
app.use(express.static('public'));
console.log("my socket server is running at port:3000");