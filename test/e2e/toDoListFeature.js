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
    expect(element(by.id('taskList')).getText()).toEqual('my first task');
  });


});