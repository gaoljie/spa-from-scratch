## Reach Router

`yarn add @reach/router`

`yarn add @types/reach__router --dev`

## Create Page

`mkdir src/page`

create src/page/Home.tsx

```tsx
import * as React from "react";
import { RouteComponentProps } from "@reach/router";

class Home extends React.Component<RouteComponentProps> {
  public render() {
    return <div>home</div>;
  }
}

export default Home;
```

create src/page/Detail.tsx

```tsx
import * as React from "react";
import { RouteComponentProps } from "@reach/router";

class Detail extends React.Component<RouteComponentProps> {
  public render() {
    return <div>detail</div>;
  }
}

export default Detail;
```

## add Link and Router

in src/App.tsx

```tsx
import * as React from "react";
import styled from "styled-components";
import { Router, Link } from "@reach/router";
import Home from "./page/Home";
import Detail from "./page/Detail";
import { observable } from "mobx";

const appState = observable({
  count: 0,
  addCount() {
    this.count++;
  }
});

const Wrapper = styled.section`
  padding: 5px;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: red;
`;

interface HelloProps {
  content: string;
}

export default class App extends React.Component<HelloProps, {}> {
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
      </Wrapper>
    );
  }
}
```
