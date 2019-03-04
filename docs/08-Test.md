## install jest

`yarn add --dev jest`

## jest config

add 'jest' to .eslintrc.json

```json
"env": {
  "browser": true,
  "jest": true
},
```

## add test example

`mkdir src/__test__`

create index.test.js under this folder

```js
test("number", () => {
  expect(1).toBe(1);
});
```

## Test

add following code in npm script
`"test": "jest"`

run `yarn test`
