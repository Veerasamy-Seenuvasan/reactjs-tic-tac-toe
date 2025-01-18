import React, { Component } from 'react';

class UseStateDemoClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 5
    };
  }

  increment1 = () => {
    this.setState(
      { counter: this.state.counter + 5 },
      () => {
        this.setState({ counter: this.state.counter + 5 });
        alert(this.state.counter);
        this.setState({ counter: this.state.counter + 5 });
        this.setState({ counter: this.state.counter + 5 });
      }
    );
  };

  increment2 = () => {
    this.setState(
      (prevState) => ({ counter: prevState.counter + 5 }),
      () => {
        this.setState((prevState) => ({ counter: prevState.counter + 5 }));
        alert(this.state.counter);
        this.setState((prevState) => ({ counter: prevState.counter + 5 }));
        this.setState((prevState) => ({ counter: prevState.counter + 5 }));
      }
    );
  };

  render() {
    return (
      <div>
        <span>{this.state.counter}</span>
        <button onClick={this.increment1}>Increment 1</button>
        <button onClick={this.increment2}>Increment 2</button>
      </div>
    );
  }
}

export default UseStateDemoClass;
