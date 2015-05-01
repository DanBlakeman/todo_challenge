describe('To do list app', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
    var input = element(by.model('Main.task'));
    input.sendKeys('my first task');
    element(by.buttonText('Add Task!')).click();
    var input = element(by.model('Main.task'));
    input.sendKeys('my second task');
    element(by.buttonText('Add Task!')).click();
    first_item = element.all(by.repeater('task in Main.taskList')).get(0);
    second_item = element.all(by.repeater('task in Main.taskList')).get(1);
  });

  it("I can mark completed items", function() {
    first_item = element.all(by.repeater('task in Main.taskList')).get(0);
    first_item.click();
    expect(first_item.getAttribute('class')).toContain('task_item--completed')
  });

  it("Only completed items are marked", function() {
    first_item.click();
    expect(second_item.getAttribute('class')).toNotContain('task_item--completed')
  });

  it("I can unmark completed items", function() {
    first_item.click();
    expect(first_item.getAttribute('class')).toContain('task_item--completed');
     first_item.click();
    expect(first_item.getAttribute('class')).toNotContain('task_item--completed')
  });




});