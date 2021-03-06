import React from 'react';
import ReactDOM from 'react-dom';

import './scss/style.scss';

const Todo = ({ task, completed, onClick }) => {
  console.log('TodoBigT');
  return (
    <li className={completed ? 'completed' : ''} onClick={onClick}>{task}</li>
  )
}
///i think i messed up with task form
const TaskForm = ({ handleChange, handleSubmit, newTask }) => {
  return (
    <form onSubmit={handleSubmit}>

      <input name="task"
        placeholder="Task"
        onChange={handleChange}
        value={newTask}
      />

      <button>Add</button>

    </form>
  );
}

class App extends React.Component {



  remainingTodos() {
    return this.state.todos.filter(todo => !todo.completed);
  }


  state = {
    todos: [{ task: 'Make a todo app', completed: false}, {task: 'Scream', completed: false}, {task: 'Shout', completed: false}, {task: 'And code', completed: false}],
     newTask: ''

  }


  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ newTask: e.target.value });
  }

  // `index` is the index of the todo clicked on
  // We are using it to determine which todo we want to toggle
  tooggleCompleted = (index) => {
    console.log('togcompleted');
    this.setState(prevState => {

      const todos = prevState.todos.map((todo, i) => {
        // `i` is the index of the todo inside the `map` function
        // if `i` matches `index` then we have found the todo that was clicked on
        if(i === index) todo.completed = !todo.completed;

        // we return the todo, either as it was, or toggled
        return todo;
      });

      return { todos };
    });
  }
  /// keeps submititng the form and it doesnt invoke iother functions
  handleSubmit = (e) => {
    console.log('HANDLE');
    e.preventDefault(); // prevent the form from refreshing the page

    this.setState(prevState => {
      // we cannot modify the todos array directly using `push`
      // we have to make sure we make a new copy of the array
      // `concat` behaves the same as `push` but returns a new array
      const newTodo = { task: prevState.newTask };
      const todos = prevState.todos.concat(newTodo);

      // we return the new state from `setState`
      return {
        todos: todos,
        newTask: '' // this will clear the form input
      };
    });
  }


  render() {
    return (
      <main>
      <h1>You have {this.remainingTodos().length} things to do!</h1>
      <ul>
      {this.state.todos.map((todo, i) => <Todo key={i} {...todo} />)}
      </ul>

      <TaskForm handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      newTask={this.state.newTask}
      />
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
