module.exports = {
  name: 'Ember CLI Simple Auth OAuth 2.0',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);

    this.app.import(app.bowerDirectory + '/ember-simple-auth/simple-auth.amd.js', {
      exports: {
        'simple-auth': [
          'authenticators/oauth2',
          'authorizers/oauth2',
          'initializer'
        ]
      }
    });
  }
}
