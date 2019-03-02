## prettier

`yarn add prettier eslint-config-prettier --dev`

eslint-config-prettier disable the conflicting rules between eslint and prettier

## eslint

install eslint
`yarn add eslint --dev`

install eslint-config-airbnb

eslint-config-airbnb default export contains all of our ESLint rules, including ECMAScript 6+ and React

`npx install-peerdeps --dev eslint-config-airbnb`

create .eslintrc.json file

```json
{
  "extends": ["airbnb", "prettier"]
}
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
