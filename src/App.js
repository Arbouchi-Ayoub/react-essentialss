import React, { Component } from "react";
import Child from "./components/child";

export default class App extends Component {
  state = {
    show: false,
  };

  handleToggleCounter = () =>
    this.setState({
      show: !this.state.show,
    });

  render() {
    return (
      <>
        <button onClick={this.handleToggleCounter} className="btn btn-warning">
          show Counter
        </button>

        {this.state.show ? <Child initialVA={0} /> : null}
      </>
    );
  }
}
