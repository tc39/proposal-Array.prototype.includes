# `Array.prototype.contains` Reference Implementation

The reference implementation is meant to be a line-by-line transcription of the specification from ECMASpeak into JavaScript, as much as is possible.

Its purpose is to provide a 100%-fidelity implementation to run tests against in order to check the spec logic. In particular, it is not intended be a usable implementation or polyfill.

It uses [especially](https://www.npmjs.org/package/especially) to manifest a bunch of ES6 spec operations as JavaScript functions. As such it will only run in Node 0.11 with the `--harmony` flag on.
