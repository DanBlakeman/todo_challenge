describe('To do list app', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
    var input = element(by.model('Main.task'));
    input.sendKeys('my first task');
    element(by.buttonText('Add Task!')).click();
    var input = element(by.model('Main.task'));
    input.sendKeys('my second task');
    element(by.buttonText('Add Task!')).click();
  });

  it("I can mark completed items", function() {
    first_item = element.all(by.repeater('task in Main.taskList')).get(0);
    expect(first_item)
    first_item.click();
    expect(first_item.getAttribute('class')).toContain('task_item--completed')
  });




});