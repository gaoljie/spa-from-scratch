## install jest

`yarn add --dev jest react-test-renderer @types/jest ts-jest`

## jest config

add jest.config.js file in root directory

```js
module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
};
```

## add test example

`mkdir src/__test__`

create Home.test.tsx under this folder

```tsx
import * as React from "react";
import { create } from "react-test-renderer";
import Details from "../page/Detail";

test("snapshot", () => {
  const c = create(<Details />);
  expect(c.toJSON()).toMatchSnapshot();
});
```

## Test

add following code in npm script
`"test": "jest"`

run `yarn test`
