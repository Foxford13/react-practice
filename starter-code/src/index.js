// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import './scss/style.scss';
//
// class App extends React.Component {
//
//   render() {
//     return (
//       <main>
//         <h1>You have 100 thing(s) to do!</h1>
//         <ul>
//           <li>Make a todo app</li>
//         </ul>
//
//         <TaskForm />
//       </main>
//     );
//   }
// }
//
// const TaskForm = () => {
//   return (
//     <form>
//       <input placeholder="Task" />
//       <button>Add</button>
//     </form>
//   )
// }
// class Header extends React.Component {
//   render() {
//     return (
//       <h1>Hello World!</h1>
//     )
//   }
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

state = {
  message: 'Hello world'
};



  render() {
    return (
      <main>
      <p>the message is {this.state.message} </p>
        <Header message={this.state.message} />
        <Footer />
      </main>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <h1>{this.props.message}</h1>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">This is the footer...</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
