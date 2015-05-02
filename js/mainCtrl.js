alwaysDo.controller('MainCtrl', function() {

  self = this;

  self.title= 'Always Do!';
  self.task = '';
  self.taskList = [];
  self.filter = {};

  self.addTask = function() {
    self.taskList.push({ 'task' : self.task, 'completed' : false });
    self.task = '';
  }

  self.toggleComplete = function(task_index) {
    self.taskList[task_index].completed = !self.taskList[task_index].completed;
  };

  self.filterByComplete = function() {
    self.filter = { 'completed' : true };
  }

  self.filterByActive = function() {
    self.filter = { 'completed' : false };
  }

  self.removeFilter = function() {
    self.filter =  {} ;
  };

});