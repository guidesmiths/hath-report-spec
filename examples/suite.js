var Hath = require('hath')
var report = require('..')

function testSomething(t, done) {
  t.assert(true, 'I love it when a plan comes together')
  t.assert(false, 'You lose sucker!')
  done()
}

module.exports = Hath.suite('Hath Report Spec', [
  testSomething
]);

if (module === require.main) {
  module.exports(new Hath(report))
}