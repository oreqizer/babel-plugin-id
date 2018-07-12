# babel-plugin-id

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
