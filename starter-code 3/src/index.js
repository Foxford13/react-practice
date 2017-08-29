import React from 'react';
import ReactDOM from 'react-dom';

import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <main>
        <h1>You have 1 thing(s) to do!</h1>
        <ul>
          <li>Make a todo app</li>
        </ul>

        <TaskForm />
      </main>
    );
  }
}

const TaskForm = () => {
  return (
    <form>
      <input placeholder="Task" />
      <button>Add</button>
    </form>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);