alwaysDo.controller('MainCtrl', function() {

  self = this;

  self.title= 'Always Do!';
  self.task = '';
  self.taskList = [];

  self.addTask = function() {
    self.taskList.push({'task' : self.task, 'completed': false});
    self.task = '';
  }

  self.markComplete = function(task_index) {
    self.taskList[task_index].completed = true;
  };

});