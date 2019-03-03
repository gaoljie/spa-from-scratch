## install React

`yarn add react react-dom @types/react @types/react-dom`

## entry

create src folder
`mkdir src`

create src/App.tsx

```tsx
import * as React from "react";

interface HelloProps {
  content: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class Hello extends React.Component<HelloProps, {}> {
  public render() {
    return <h1>Hello {this.props.content}!</h1>;
  }
}
```

create src/index.js

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App content={"world"} />, document.getElementById("root"));
```

create src/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

## develope the app

run command
`yarn start`

## build the app

run command
`yarn build`
