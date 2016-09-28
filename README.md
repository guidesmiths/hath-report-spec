# hath-reporter-spec
[![Build Status](https://img.shields.io/travis/guidesmiths/hath-report-spec/master.svg)](https://travis-ci.org/guidesmiths/hath-report-spec)

Outputs a hath report in spec like format, e.g.
```
 Hath Report Spec:
  ✓ Test something: I love it when a plan comes together
  ✖ Test something: You lose sucker!

Summary
-------
PASS: 1
FAIL: 1
```

## Usage
```js
var Hath = require('hath')
var report = require('hath-report-spec')

function testSomething(t, done) {
  t.assert(true, 'I love it when a plan comes together')
  t.assert(false, 'You lose sucker!')
  done()
}

module.exports = Hath.suite('Hath Report Spec', [
  testSomething
])

if (module === require.main) {
  module.exports(new Hath(report))
}
```
