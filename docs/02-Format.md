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
    "interface-name": false,
    "ordered-imports": false,
    "member-ordering": false
  }
}
```

create tsconfig.json

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "jsx": "react",
    "experimentalDecorators": true,
    "lib": ["dom", "es2015"]
  },
  "include": ["./**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Pre-commit hook

`yarn add pretty-quick husky --dev`

add following code to npm script

`"lint": "tslint -p tsconfig.json"`

add this config to your package.json:

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged && yarn lint"
    }
  }
}
```
