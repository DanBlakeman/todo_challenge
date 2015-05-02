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
    expect(ctrl.taskList).toEqual([{'task' :'first task', 'completed' : false}]);
  });

  it('task is not completed when created', function() {
    ctrl.task = 'first task';
    ctrl.addTask();
    expect(ctrl.taskList).toEqual([{'task' :'first task', 'completed': false}]);
  });

  it('task model resets task upon adding task to taskList', function() {
    ctrl.task = 'first task';
    ctrl.addTask();
    expect(ctrl.task).toEqual('');
  });

  it('task can be marked as complete', function() {
    ctrl.task = 'first task';
    ctrl.addTask();
    expect(ctrl.taskList[0].completed).toEqual(false);
    ctrl.toggleComplete(0);
    expect(ctrl.taskList[0].completed).toEqual(true);
  });

  it('task can be unmarked as complete', function() {
    ctrl.task = 'first task';
    ctrl.addTask();
    expect(ctrl.taskList[0].completed).toEqual(false);
    ctrl.toggleComplete(0);
    expect(ctrl.taskList[0].completed).toEqual(true);
    ctrl.toggleComplete(0);
    expect(ctrl.taskList[0].completed).toEqual(false);
  });

  it('is initialised with no filter value', function() {
    expect(ctrl.filter).toEqual({});
  });

  it('filterByComplete method changes filter to show only complete items', function() {
    expect(ctrl.filter).toEqual({});
    ctrl.filterByComplete();
    expect(ctrl.filter).toEqual({ 'completed' : true });
  });

  it('filterByActive method changes filter to show only active items', function() {
    expect(ctrl.filter).toEqual({});
    ctrl.filterByActive();
    expect(ctrl.filter).toEqual({ 'completed' : false });
  });

  it('removeFilter method removes filter', function() {
    ctrl.filterByActive();
    ctrl.removeFilter();
    expect(ctrl.filter).toEqual({});
  });



});