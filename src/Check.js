import React, { Component } from "react";

export default class Check extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  onClick = e => (this.state = { counter: this.state.counter + 1 });

  //   onClick = e => this.setState({ counter: this.state.counter + 1 });
  render() {
    return (
      <div>
        <h3>{this.state.counter}</h3>
        <button onClick={this.onClick} type="button">
          counter up
        </button>
      </div>
    );
  }
}
