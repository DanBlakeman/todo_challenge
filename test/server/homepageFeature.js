var chai = require('chai');
var expect = chai.expect;
var mongoose = require("mongoose");
var Task = require('../../src/taskModel.js');
var request = require('request');

describe('Node Server', function() {

  it('loads angular app as root', function(done) {
    browser
      .url('http://localhost:3000')
      .getText('body', function(err, text) {
        expect(text).to.include('Always Do!');
      })
      .call(done);
  });



});

describe('Task Model', function() {


  beforeEach(function(done) {
    mongoose.connect('mongodb://localhost/alwaysDoTest');
    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      db.db.dropDatabase(done());
    });
  });

  afterEach(function(done) {
    mongoose.disconnect();
    done();
    });

  it('can add a task', function(done) {
    var task = new Task({
      'task' : 'my first task',
      'completed' : false
    });
    task.save( function(error, savedtask) {
      if (error) {
        console.log(error);
        done()
      };
      expect(savedtask.task).to.equal('my first task');
      expect(savedtask.completed).to.equal(false);
      Task.count({}, function(err, count) {
          expect(count).to.equal(1);
          done();
      });
    });
  });

    it('responds with correct status when requesting homepage', function(done) {
      request.get('http://localhost:3000', function (err, res, body){
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    // it('adds to the database when sent a correct post request', function(done) {
    //   request.post('http://localhost:3000/add_task', function (err, res, body){
    //     expect(res.statusCode).to.equal(200);
    //     Task.count({}, function(err, count) {
    //         expect(count).to.equal(1);
    //         done();
    //     });
    //   });
    // });



});