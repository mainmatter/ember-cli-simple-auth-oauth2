#  Ember Simple Auth OAuth 2.0

This is an npm package that contains the Ember Simple Auth OAuth 2.0 extension
library packaged as an [Ember CLI](https://github.com/stefanpenner/ember-cli)
Addon.

## Installation

**Ember Simple Auth OAuth 2.0 requires at least Ember CLI 0.0.44.**

To install simply run

```
npm install --save-dev ember-cli-simple-auth-oauth2
ember generate ember-cli-simple-auth-oauth2
```

in your Ember CLI project's root.
### Configuration

Ember Simple Auth OAuth 2.0 uses the Ember CLI project's configuration as
defined in `config/environment.js`. Configure values for
`ENV['simple-auth-oauth2']`, e.g.:

```js
ENV['simple-auth-oauth2'] = {
  serverTokenEndpoint: 'http://path.com/to/your/access_token/end_point'
};
```

For the actual Ember Simple Auth repository see
https://github.com/simplabs/ember-simple-auth
