import React from "react";
import styled from "styled-components";
import { Router, Link } from "@reach/router";
import Home from "./page/Home";
import Detail from "./page/Detail";
import Store from "./store";

const store = new Store();

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
        <Home path="/" store={store} />
        <Detail path="/detail" />
      </Router>
    </Wrapper>
  );
}

export default App;
