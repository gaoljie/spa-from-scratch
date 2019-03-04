## Reach Router

`yarn add @reach/router`

## Create Page

create src/page/Home.jsx

```jsx
import React from "react";

function Home() {
  return <div>home</div>;
}

export default Home;
```

create src/page/Detail.jsx

```jsx
import React from "react";

function Detail() {
  return <div>detail</div>;
}

export default Detail;
```

## add Link and Router

in src/App.jsx

```jsx
import React from "react";
import styled from "styled-components";
import { Router, Link } from "@reach/router";
import Home from "./page/Home";
import Detail from "./page/Detail";

const Wrapper = styled.section`
  padding: 5px;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: red;
`;

function App() {
  return (
    <Wrapper>
      <Title>title</Title>
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

export default App;
```
