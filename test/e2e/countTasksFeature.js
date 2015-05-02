describe('To do list app can count tasks', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
    input = element(by.model('Main.task'));
    input.sendKeys('my first task', protractor.Key.ENTER);
   input.sendKeys('my second task', protractor.Key.ENTER);
   tasks = element.all(by.repeater('task in Main.taskList'));
   tasks.get(0).click();
  });

  it('counts correctly', function() {
    var count = element(by.binding('Main.taskCount'));
    expect(count.getText()).toContain(tasks.count());
    input.sendKeys('my third task', protractor.Key.ENTER);
    expect(count.getText()).toEqual("Total tasks: 3");
  });


});