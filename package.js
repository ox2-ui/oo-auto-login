Package.describe({
  name: 'ox2:auto-login',
  version: '0.1.3',
  // Brief, one-line summary of the package.
  summary: 'DO NOT USE',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: '',
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
      'ecmascript',
      'less',
      'accounts-base'
    ]);
    // 3rd party
    api.use([
      'mquandalle:jade@0.4.9', 'mousetrap:mousetrap@1.4.6_1'
    ]);
    api.addFiles('lib/client/oo-auto-login.jade', C);
    api.addFiles('lib/client/oo-auto-login.less', C);
    api.addFiles('lib/client/oo-auto-login.js', C);
    api.addFiles('lib/server/oo-auto-login.js', S);
});

Npm.depends({
  'faker': '3.0.1'
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ox2:auto-login');
  api.addFiles('tests/package-tests.js');
});
