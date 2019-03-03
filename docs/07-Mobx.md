## install Mobx

`yarn add mobx mobx-react`

## create store

`mkdir src/store`

create src/store/index.tsx

```tsx
import { action, observable } from "mobx";

class AppState {
  @observable public counter: number = 0;

  @action public addCounter() {
    this.counter++;
  }
}

export default AppState;
```

change src/index.tsx

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import AppState from "./store";

const appState = new AppState();

ReactDOM.render(
  <App content={"world"} appState={appState} />,
  document.getElementById("root")
);
```

change src/App.tsx

```tsx
import { observer } from "mobx-react";
import AppState from "./store";
```

```tsx
@observer
export default class App extends React.Component<HelloProps> {
  private addCounter = () => {
    this.props.appState.addCounter();
  };

  public render() {
    return (
      <Wrapper>
        <Title>title</Title>
        <h1>Hello {this.props.content}!</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/detail">Detail</Link>
        </nav>

        <Router>
          <Home path="/" />
          <Detail path="/detail" />
        </Router>

        <p>{this.props.appState.counter}</p>
        <button onClick={this.addCounter}>add counter</button>
      </Wrapper>
    );
  }
}
```
