describe('Can clear completed', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
    input = element(by.model('Main.task'));
    input.sendKeys('my first task', protractor.Key.ENTER);
   input.sendKeys('my second task', protractor.Key.ENTER);
   tasks = element.all(by.repeater('task in Main.taskList'));
   tasks.get(0).click();
  });

  it('can click to remove done tasks', function() {
    expect(tasks.count()).toEqual(2);
    element(by.buttonText('Clear completed')).click();
    expect(tasks.count()).toEqual(1);
    expect(tasks.getText()).toContain('my second task');
    expect(tasks.getText()).not.toContain('my first task');
  });


});