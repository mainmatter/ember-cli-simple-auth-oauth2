#  Ember Simple Auth OAuth 2.0

This is an npm package that contains the Ember Simple Auth OAuth 2.0 extension
library packaged as an [Ember CLI](https://github.com/stefanpenner/ember-cli)
Addon.

## Installation

**Ember Simple Auth OAuth 2.0 requires at least Ember CLI 0.0.42.**

To install simply run

```
npm install --save-dev ember-cli-simple-auth-oauth2
ember generate ember-cli-simple-auth-oauth2
```

in your Ember CLI project's root.

For the actual Ember Simple Auth repository see
https://github.com/simplabs/ember-simple-auth

## Configuration

```js
// initializers/simple-auth-config.js
export default {
  name: 'simple-auth-config',
  before: 'simple-auth',
  initialize: function(container) {
    window.ENV = window.ENV || {};
    window.ENV['simple-auth-oauth2'] = {
      serverTokenEndpoint: "http://path.com/to/your/access_token/end_point",
      serverTokenRevokationEndpoint: "http://path.com/to/your/token_revocation/end_point",
      refreshAccessTokens: true
    }
  }
};

```
