Package.describe({
  name: 'ox2:auto-login',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ox2/oo-auto-login',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  debugOnly: true
});

var C = 'client';
var S = 'server';
var CS = [C, S];

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    // Core
    api.use([
      'templating',
      'ecmascript'
    ]);
    // 3rd party
    api.use([
      'lauricio:less-autoprefixer@2.5.0_3',
      'mquandalle:jade@0.4.5', 'mousetrap:mousetrap@1.4.6_1'
    ]);
    api.addFiles('lib/oo-auto-login.jade', C);
    api.addFiles('lib/oo-auto-login.less', C);
    api.addFiles('lib/oo-auto-login.js', C);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ox2:auto-login');
  api.addFiles('tests/package-tests.js');
});
