## install style-components

`yarn add styled-components`

## add components

change App.js

```js
import React from "react";
import styled from "styled-components";

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
      <div>Hello world</div>
    </Wrapper>
  );
}

export default App;
```
