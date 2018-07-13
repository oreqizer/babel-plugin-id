# babel-plugin-id

[![Build Status](https://travis-ci.org/oreqizer/babel-plugin-id.svg?branch=master)](https://travis-ci.org/oreqizer/babel-plugin-id)
[![codecov](https://codecov.io/gh/oreqizer/babel-plugin-id/branch/master/graph/badge.svg)](https://codecov.io/gh/oreqizer/babel-plugin-id)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm (scoped)](https://img.shields.io/npm/v/babel-plugin-id.svg)](https://www.npmjs.com/package/babel-plugin-id)

Literally all it does is it evaluates a function to its argument. Useful for **translation collection**, for example.

Function name defaults to `__`.

## Setup

Just add `id` to the list of babel plugins, e.g. to `.babelrc`:

```json
{
  "plugins": ["id"]
}
```

### Example

```js
// Input:
const text = __("Translate me");

// Output:
const text = "Translate me";
```

## Config

To change the function name, add an object with the `fn` property to your config:

```json
{
  "plugins": [["id", { "fn": "t" }]]
}
```

This will evaluate functions named `t`.

### Example

```js
// Input:
const text = t("Translate me");

// Output:
const text = "Translate me";
```

## License

MIT
