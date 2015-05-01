alwaysDo.controller('MainCtrl', function() {

  self = this;

  self.title= 'Always Do!';
  self.task = '';
  self.taskList = [];

  self.addTask = function() {
    self.taskList.push({'task' : self.task});
    self.task = '';
  }

});