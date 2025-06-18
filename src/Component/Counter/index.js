import { Component } from "react";

import "./index.css";

class Counter extends Component {
  state = { count: 0 };

  onDecrement = () => {
    this.setState((prevstate) => ({ count: prevstate.count - 1 }));
  };

  onIncrement = () => {
    this.setState((prevstate) => ({ count: prevstate.count + 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="app-container">
        <h1 className="count">Count {count}</h1>
        <div className="buttoncontainer">
          <button className="button" onClick={this.onIncrement} type="button">
            Increase
          </button>
          <button className="button" onClick={this.onDecrement} type="button">
            Decrease
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
