#!/usr/bin/env node

var polyglotbot = require('polyglotbot/google');

function speak (text) {
  console.log(text);
  if (argv.quiet) {
    process.exit();
  }

  polyglotbot.pronounce(argv.to || argv.from || 'en', text, function (err, stream) {
    var mpg123 = require('child_process').spawn('mpg123', ['-'], {
      stdio: ['pipe', null, null]
    });
    stream.pipe(mpg123.stdin).on('error', function () {
      console.error('Error in writing. Ensure mpg123 is installed.');
      process.exit(1);
    });
  });
}

var argv = require('optimist')
  .alias('f', 'from').describe('from', 'Language to translate from.')
  .alias('t', 'to').describe('to', 'Language to translate to.')
  .alias('q', 'quiet').describe('quiet', 'Shhhhhhhh.').boolean('quiet')
  .argv;

var text = argv._.join(' ') || 'Please write some text to pronounce.';

// Translate or just speak.
if (argv.from && argv.to) {
  polyglotbot.translate(argv.from, argv.to, text, function (err, translations) {
    speak(translations[0] || 'No translation available.')
  });
} else {
  speak(text);
}