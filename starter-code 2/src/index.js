import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap-css-only';



const Buttons = ({ increment, decrement, reset }) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={increment}>+</button>
      {' '}
      <button className="btn btn-primary" onClick={decrement}>-</button>
      {' '}
      <button className="btn btn-primary" onClick={reset}>Reset</button>
    </div>
  );
};






class App extends React.Component {

  state = { counter: 0 };

  increment = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }))
  };

  decrement = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }))
  };

  reset = () => {
    this.setState({ counter: 0 });
  };


  render() {
    return (
      <main className="container">
      <h1>{this.state.counter}</h1>
      <Buttons increment={this.increment}
        decrement={this.decrement}
        reset={this.reset}
      />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
