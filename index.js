module.exports = {
  name: 'ember-cli-simple-auth-oauth2',

  included: function(app) {
    this._super.included(app);

    this.app.import('bower_components/ember-simple-auth/simple-auth-oauth2.amd.js', {
      exports: {
        'simple-auth-oauth2/authenticators/oauth2': ['default'],
        'simple-auth-oauth2/authorizers/oauth2':    ['default'],
        'simple-auth-oauth2/initializer':           ['default']
      }
    });
  }
}
