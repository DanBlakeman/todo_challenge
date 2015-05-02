var express = require('express');
var app = express();
var server = require('http').createServer(app);

var port = process.env.PORT || 3000;

server.listen(port, function(){
  console.log('Understood Sir, Standing Watch Over Port ' + port);
});

app.use(express.static('public'));

app.get('/', function(req, resp) {
  resp.sendFile('index.html');
});

module.exports = server;