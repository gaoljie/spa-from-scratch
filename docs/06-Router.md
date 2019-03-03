## Reach Router

`yarn add @reach/router`

`yarn add @types/reach__router --dev`

## Create Page

create src/Home.tsx

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

create src/Detail.tsx

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
import Home from "./Home";
import Detail from "./Detail";

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

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
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
