Package.describe({
  name: 'meteor-deprecated-rest',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Old methods of getting data from bigip rest',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('http');
  api.addFiles('meteor-deprecated-rest.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('meteor-deprecated-rest');
  api.addFiles('meteor-deprecated-rest-tests.js');
});
