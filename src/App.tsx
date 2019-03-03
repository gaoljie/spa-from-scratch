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
