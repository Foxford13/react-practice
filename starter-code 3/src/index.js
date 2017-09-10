import React from 'react';
import ReactDOM from 'react-dom';

import './scss/style.scss';

const Todo = ({ task, completed, onClick }) => {
  console.log('TodoBigT');
  return (
    <li className={completed ? 'completed' : ''} onClick={onClick}>{task}</li>
  )
}

class App extends React.Component {


  /// keeps submititng the form and it doesnt invoke iother functions
  handleSubmit = (e) => {
    console.log('works');
    e.preventDefault(); // prevent the form from refreshing the page

    this.setState(prevState => {

      const newTodo = { task: prevState.newTask, completed: false };
      const todos = prevState.todos.concat(newTodo);

      return {
        todos,
        newTask: ''
      };
    });
  }

  remainingTodos() {
    return this.state.todos.filter(todo => !todo.completed);
  }


  state = {
    todos: [{ task: 'Make a todo app', completed: 'false'}, {task: 'Scream', completed: 'false'}, {task: 'Shout', completed: 'false'}, {task: 'And code', completed: 'false'}]

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

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ newTask: e.target.value });
  }



  render() {
    return (
      <main>
      <h1>You have {this.remainingTodos().length} things to do!</h1>
      <ul>
      {this.state.todos.map((todo, i) => <Todo key={i} {...todo} />)}
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
