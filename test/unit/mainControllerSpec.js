describe("Main Controller", function() {

  beforeEach(module('AlwaysDo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('MainCtrl');
  }))


  it('should have a MainCtrl', function() {
    expect(ctrl.title).toEqual('Always Do!');
  });

  it('on load task should be empty', function() {
    expect(ctrl.task).toEqual('');
  });

    it('on load taskList should be empty', function() {
    expect(ctrl.taskList).toEqual([]);
  });

  it('can add to taskList using task', function() {
    ctrl.task = 'first task';
    ctrl.addTask();
    expect(ctrl.taskList).toEqual([{'task' :'first task'}]);
  });

  it('resets task upon adding task to taskList', function() {
    ctrl.task = 'first task';
    ctrl.addTask();
    expect(ctrl.task).toEqual('');
  });





});