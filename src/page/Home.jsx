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
