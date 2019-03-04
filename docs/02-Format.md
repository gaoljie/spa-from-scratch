## install prettier

prettier enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

`yarn add prettier eslint-config-prettier --dev`

**eslint-config-prettier** is to disable the conflicting rules between eslint and prettier

## eslint

install eslint

`yarn add eslint --dev`

install eslint-config-airbnb

eslint-config-airbnb default export contains all of our ESLint rules, including ECMAScript 6+ and React

`npx install-peerdeps --dev eslint-config-airbnb`

create .eslintrc.json file in root directory

```json
{
  "parser": "babel-eslint",
  "env": {
    "browser": true
  },
  "extends": ["airbnb", "prettier"],
  "rules": {
    "react/prop-types": false,
    "react/destructuring-assignment": false,
    "react/button-has-type": false
  }
}
```

create .eslintignore file in root directory

```
node_modules/
dist/
```

## Pre-commit hook

`yarn add pretty-quick husky --dev`

and add this config to your package.json:

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged && eslint . --ext .js,.jsx"
    }
  }
}
```
