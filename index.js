module.exports = {
  name: 'Ember CLI Simple Auth OAuth 2.0',

  included: function(app) {
    this._super.included(app);

    this.app.import(app.bowerDirectory + '/ember-simple-auth/simple-auth.amd.js', {
      exports: {
        'simple-auth-oauth2/authenticators/oauth2': ['default'],
        'simple-auth-oauth2/authorizers/oauth2':    ['default'],
        'simple-auth-oauth2/initializer':           ['default']
      }
    });
  }
}
