var express = require('express');
var app = express();
var server = require('http').createServer(app);
// var mongoose = require('mongoose');
// var bodyParser = require('body-parser');
// var Task = require('./src/taskModel.js');

// app.use(bodyParser.json());

// var uristring =
// process.env.MONGOLAB_URI ||
// process.env.MONGOHQ_URL ||
// 'mongodb://localhost/alwaysDoTest';

var port = process.env.PORT || 3000;

// mongoose.connect(uristring, function (err, res) {
//   if (err) {
//   console.log ('ERROR connecting to: ' + uristring + '. ' + err);
//   } else {
//   console.log ('Succeeded connected to: ' + uristring);
//   db = mongoose.connection;
//   }
// });

server.listen(port, function(){
  console.log('Understood Sir, Standing Watch Over Port ' + port);
});

app.use(express.static('public'));
app.use(express.static('bower_components'));




app.get('/', function(req, resp) {
  resp.sendFile('index.html');
});

// app.post('/task', function(req, resp) {
//   var task = new Task(req.body);
//   task.save( function(error, savedtask) {
//         if (error) {
//           console.log(error);
//           resp.send("failed");
//         };
//         resp.send("task added to db");
//         });
// });

// app.post('/edit_task', function(req, resp) {
//   // console.log(JSON.parse(req.body));
//   Task.findOne(req.body, function (err, task) {
//       console.log(task);
//       task.completed = req.body.completed;
//       task.save(function (err) {
//         if (err) { console.log ('ERROR') } else {
//           resp.send('UPDATED');
//         };
//       });
//   });
// });

// app.get('/task', function(req, resp) {
//   Task.find().lean().exec(function(err, items) {
//     resp.send(JSON.stringify(items));
//   });
// });


module.exports = server;