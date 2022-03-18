import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("construtor");
  }

  componentDidMount() {
    console.log("cmpt did mount ");
  }

  componentDidUpdate(prevProps,prevState) {
    //   console.log(prevProps,prevState);
    console.log(`did update from ${prevState.counter} to ${this.state.counter}`);
  }

  componentWillUnmount() {
    console.log("will unmount");
  }

  handleClick = () => {
    // this.state.counter++
    // this.forceUpdate()
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick} className="btn btn-success">
          Increment 😇
        </button>
      </>
    );
  }
}
