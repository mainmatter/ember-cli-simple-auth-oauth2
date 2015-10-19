#  Ember Simple Auth OAuth 2.0

__This repository is deprecated. [Ember Simple Auth 1.0 is distributed as an
Ember CLI Addon](https://github.com/simplabs/ember-simple-auth) that contains
all of the previously individual parts of the library.__

This is an npm package that contains the Ember Simple Auth OAuth 2.0 extension
library packaged as an [Ember CLI](https://github.com/stefanpenner/ember-cli)
Addon.

## Installation

**Ember Simple Auth OAuth 2.0 requires at least Ember CLI 0.0.44.**

```
ember install ember-cli-simple-auth
ember install ember-cli-simple-auth-oauth2
```

in your Ember CLI project's root.

If you're using Ember CLI 0.2.2 or older, run

```
ember install:addon ember-cli-simple-auth
ember install:addon ember-cli-simple-auth-oauth2
```

If you're using Ember CLI 0.1.4 or older, run

```
npm install --save-dev ember-cli-simple-auth
ember generate ember-cli-simple-auth
npm install --save-dev ember-cli-simple-auth-oauth2
ember generate ember-cli-simple-auth-oauth2
```

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
