describe('To do list app', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000');
    var input = element(by.model('Main.task'));
    input.sendKeys('my first task', protractor.Key.ENTER);
   input.sendKeys('my second task', protractor.Key.ENTER);
   tasks = element.all(by.repeater('task in Main.taskList'));
   tasks.get(0).click();
  });


  it("Can click to see only completed tasks", function() {
    expect(tasks.getText()).toContain('my first task');
    expect(tasks.getText()).toContain('my second task');
    element(by.buttonText('Completed')).click();
    expect(tasks.getText()).toContain('my first task');
    expect(tasks.getText()).not.toContain('my second task');
  });

  it("Can click to see only active tasks", function() {
    expect(tasks.getText()).toContain('my first task');
    expect(tasks.getText()).toContain('my second task');
    element(by.buttonText('Active')).click();
    expect(tasks.getText()).not.toContain('my first task');
    expect(tasks.getText()).toContain('my second task');
  });

  it("Can click to see all tasks", function() {
    expect(tasks.getText()).toContain('my first task');
    expect(tasks.getText()).toContain('my second task');
    element(by.buttonText('Active')).click();
     element(by.buttonText('All')).click();
    expect(tasks.getText()).toContain('my first task');
    expect(tasks.getText()).toContain('my second task');
  });

});