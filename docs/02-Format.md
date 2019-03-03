## install prettier

prettier enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

`yarn add prettier --dev`

**eslint-config-prettier** is to disable the conflicting rules between eslint and prettier

## install TypeScript, tslint

install TypeScript, tslint

`yarn add typescript tslint tslint-react tslint-config-prettier --dev`

create tslint.json file in root directory

```json
{
  "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
  "rules": {
    "interface-name": [true, "never-prefix"]
  }
}
```

create tsconfig.json

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "jsx": "react"
  },
  "include": ["./**/*"],
  "exclude": ["node_modules"]
}
```

## Pre-commit hook

`yarn add pretty-quick husky --dev`

and add this config to your package.json:

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged && tslint -p tsconfig.json"
    }
  }
}
```
