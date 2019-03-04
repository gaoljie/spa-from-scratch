## install React

`yarn add react react-dom`

## entry

create src folder
`mkdir src`

create src/App.jsx

```jsx
import React from "react";

function App() {
  return <div>Hello World</div>;
}

export default App;
```

create src/index.jsx

```jsx
import React from "react";
import { render } from "react-dom";
import App from "./App";

render(<App />, document.getElementById("root"));
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
