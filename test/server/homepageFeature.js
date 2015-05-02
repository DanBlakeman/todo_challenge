var chai = require('chai');
var expect = chai.expect;

describe('homepage', function() {

  it('loads angular app', function(done) {
    browser
      .url('http://localhost:3000')
      .getText('body', function(err, text) {
        expect(text).to.include('Always Do!');
      })
      .call(done);
  });


});