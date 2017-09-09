import React from 'react';
import ReactDOM from 'react-dom';

import './scss/style.scss';

class App extends React.Component {


  state = {
    todos: [{ task: 'Make a todo app'}, {task: 'Scream'}, {task: 'Shout'}, {task: 'And code'}],
    newTask: ''

  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ newTask: e.target.value });
  }

  render() {
    return (
      <main>
      <h1>You have 1 thing(s) to do!</h1>
      <ul>
      {this.state.todos.map(todo => <li>{todo.task}</li>)}
      </ul>

      <TaskForm handleChange={this.handleChange}
      newTask={this.state.newTask}
      />
      </main>
    );
  }
}

const TaskForm = ({ handleChange, newTask }) => {
  return (
    <form>

      <input name="task"
        placeholder="Task"
        onChange={handleChange}
        value={newTask}
      />

      <button>Add</button>

    </form>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
