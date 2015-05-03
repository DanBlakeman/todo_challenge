var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  'task': String,
  'completed': Boolean,
}, {strict: 'throw' });

module.exports = mongoose.model('Task', schema);

