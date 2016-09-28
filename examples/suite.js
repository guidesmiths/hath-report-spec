var Hath = require('hath')
var spec = require('..')

function testSomething(t, done) {
  t.assert(true, 'I love it when a plan comes together')
  t.assert(false, 'You lose sucker!')
  done()
}

module.exports = Hath.suite('Hath Summary Spec', [
  testSomething
]);

if (module === require.main) {
  module.exports(new Hath({
      title: spec.title,
      pass: spec.pass,
      fail: spec.fail,
      summary: spec.summary
  }));
}