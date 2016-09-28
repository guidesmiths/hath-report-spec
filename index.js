var chalk = require('chalk')
var sc = require('sentence-case')
var format = require('util').format

var symbols = {
  ok: process.platform === 'win32' ? '\u221A' : '✓',
  err: process.platform === 'win32' ? '\u00D7' : '✖'
};

module.exports = {
  title: function(text) {
    console.log('\n', text + ':');
  },
  pass: function(label, message) {
    console.log(chalk.green(format('  %s %s: %s', symbols.ok, sc(label), message)));
  },
  fail: function(label, message) {
    console.log(chalk.red(format('  %s %s: %s', symbols.err, sc(label), message)));
  },
  summary: function(npass, nfail) {
    var summary = 'Summary';
    var pass = 'PASS: ' + npass;
    var fail = 'FAIL: ' + nfail;
    var dashes = ''
    for (var i = 0; i < Math.max(summary.length, pass.length, fail.length); i++) {
      dashes += '-';
    };

    console.log('')
    console.log(summary)
    console.log(dashes)
    console.log(pass)
    console.log(fail)
    console.log('')
    console.log(nfail ? chalk.red('TESTS FAIL\n') : chalk.green('TESTS PASS\n'));
  }
}