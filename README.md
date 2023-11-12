# Green Code Media / Shared Eslint Config Base

## Installation

```shell
npm add -D git@github.com:green-code-media/eslint-config-base.git
```

Create a project level `.eslintrc.js` configuration file and extend from the shared base file.

```js
module.exports = {
  extends: ["@green-code/eslint-config-base"],
};
```

## Related

- [Shared Eslint Config Mocha](https://github.com/green-code/eslint-config-mocha)
- [Shared Eslint Config Jest](https://github.com/green-code/eslint-config-jest)

### Checking It Works

```shell
npx eslint . --ext .ts,.tsx
```
