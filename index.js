var path = require('path');
var fs   = require('fs');

function EmberCLISimpleAuthOauth2(project) {
  this.project = project;
  this.name    = 'Ember CLI Simple Auth OAuth 2.0';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLISimpleAuthOauth2.prototype.treeFor = function included(name) {
  var treePath =  path.join('node_modules/ember-cli-simple-auth-oauth2', name + '-addon');

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLISimpleAuthOauth2.prototype.included = function included(app) {
  this.app = app;

  this.app.import('vendor/ember-simple-auth/simple-auth-oauth2.amd.js', {
    'simple-auth-oauth2/authenticators/oauth2': ['default'],
    'simple-auth-oauth2/authorizers/oauth2':    ['default'],
    'simple-auth-oauth2/initializer':           ['default'],
  });
};

module.exports = EmberCLISimpleAuthOauth2;
