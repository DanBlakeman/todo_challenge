var express = require('express');
var app = express();
var server = require('http').createServer(app);

var port = process.env.PORT || 3000;

server.listen(3000, function(){
  console.log('Understood Sir, Standing Watch Over Port ' + 3000);
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, resp) {
  resp.sendFile('index.html');
});

module.exports = server;