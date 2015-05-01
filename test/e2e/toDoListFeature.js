describe('To do list app', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(element(by.id('header')).getText()).toEqual('Always Do!');
  });

  it("I can post a task to the page", function() {
    var input = element(by.model('Main.task'));
    input.sendKeys('my first task');
    element(by.buttonText('Add Task!')).click();
    expect(element(by.repeater('task in Main.taskList')).getText()).toEqual('my first task');
  });

  it("I can post multiple tasks to the page", function() {
    var input = element(by.model('Main.task'));
    input.sendKeys('my first task');
    element(by.buttonText('Add Task!')).click();
    input.sendKeys('my second task');
    element(by.buttonText('Add Task!')).click();
    expect(element.all(by.repeater('task in Main.taskList')).get(0).getText()).toEqual('my first task');
    expect(element.all(by.repeater('task in Main.taskList')).get(1).getText()).toEqual('my second task');
  });


});