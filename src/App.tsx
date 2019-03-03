import * as React from "react";
import styled from "styled-components";
import { Router, Link } from "@reach/router";
import Home from "./page/Home";
import Detail from "./page/Detail";
import { observer } from "mobx-react";
import AppState from "./store";

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
  appState: AppState;
}

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
