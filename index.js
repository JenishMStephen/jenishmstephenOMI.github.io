var express = require('express');

var app = express();

var options = {

index: 'index.html'

};

app.use('/', express.static(__dirname + '/'));

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://localhost:%s", host, port)
 })