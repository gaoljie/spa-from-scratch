## install Mobx

`yarn add mobx mobx-react`

## config babel

```
yarn add @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators --dev
```

.babelrc

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
}
```

## create store

`mkdir src/store`

create src/store/index.js

```js
import { action, observable } from "mobx";

export default class Store {
  @observable count = 0;

  @action addCount() {
    this.count += 1;
  }

  @action reduceCount() {
    this.count -= 1;
  }
}
```

change src/App.jsx

add store

```jsx
import Store from "./store";

const store = new Store();
```

change <Home/> component
`<Home path="/" store={store} />`

change src/page/Home.jsx

```jsx
import React from "react";
import { observer } from "mobx-react";

@observer
class Home extends React.Component {
  addCount = () => {
    this.props.store.addCount();
  };
  reduceCount = () => {
    this.props.store.reduceCount();
  };

  render() {
    return (
      <div>
        <p>{this.props.store.count}</p>
        <button onClick={this.reduceCount}>minus</button>
        <button onClick={this.addCount}>add</button>
      </div>
    );
  }
}

export default Home;
```
